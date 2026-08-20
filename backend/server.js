import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// Import Models
import Book from './models/Book.js'
import Member from './models/Member.js'
import Borrowing from './models/Borrowing.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Enable CORS
app.use(cors())

// Middleware to parse JSON bodies
app.use(express.json())

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.error('MongoDB connection error:', err))

// Custom requestLogger middleware
const requestLogger = (req, res, next) => {
  console.log(`[${req.method}] ${req.path} [${new Date().toISOString()}]`)
  next()
}
app.use(requestLogger)

// REST Endpoints (Using MongoDB)

// 1. Return all books
app.get('/api/v1/books', async (req, res, next) => {
  try {
    const books = await Book.find()
    res.status(200).json({ success: true, data: books })
  } catch (error) {
    next(error)
  }
})

// Create a new book (to demonstrate DB insert)
app.post('/api/v1/books', async (req, res, next) => {
  try {
    const book = await Book.create(req.body)
    res.status(201).json({ success: true, data: book })
  } catch (error) {
    next(error)
  }
})

// Create a new member (to demonstrate DB insert)
app.post('/api/v1/members', async (req, res, next) => {
  try {
    const member = await Member.create(req.body)
    res.status(201).json({ success: true, data: member })
  } catch (error) {
    next(error)
  }
})

// 2. Return all borrowing records
app.get('/api/v1/borrowings', async (req, res, next) => {
  try {
    const borrowings = await Borrowing.find().populate('memberId bookId')
    res.status(200).json({ success: true, data: borrowings })
  } catch (error) {
    next(error)
  }
})

// 3. Create a new borrowing record
app.post('/api/v1/borrowings', async (req, res, next) => {
  try {
    const borrowing = await Borrowing.create(req.body)
    res.status(201).json({ success: true, data: borrowing })
  } catch (error) {
    next(error)
  }
})

// Route for testing the global error handler
app.get('/api/v1/error-test', (req, res, next) => {
  next(new Error('This is a test error!'))
})

// Global error-handling middleware (must be the last middleware)
const errorHandler = (err, req, res, next) => {
  console.error('Error caught in middleware:', err.message)
  
  // Handle Mongoose Validation Errors
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(val => val.message)
    return res.status(400).json({
      success: false,
      error: 'Validation Error',
      messages
    })
  }

  // Handle Mongoose Duplicate Key Errors
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      error: 'Duplicate Key Error',
      message: 'A record with that unique field already exists.'
    })
  }

  // Generic fallback
  res.status(500).json({ 
    success: false, 
    error: 'Internal Server Error',
    message: err.message
  })
}
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`)
})
