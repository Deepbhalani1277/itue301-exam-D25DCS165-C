import express from 'express'

const app = express()
const PORT = 5000

// Middleware to parse JSON bodies
app.use(express.json())

// Custom requestLogger middleware
const requestLogger = (req, res, next) => {
  console.log(`[${req.method}] ${req.path} [${new Date().toISOString()}]`)
  next()
}

// Apply requestLogger globally
app.use(requestLogger)

// In-memory data
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', isbn: '111-111', available: true },
  { id: 2, title: 'Clean Code', author: 'Robert C. Martin', category: 'Technology', isbn: '222-222', available: false },
  { id: 3, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'History', isbn: '333-333', available: true },
  { id: 4, title: 'The Alchemist', author: 'Paulo Coelho', category: 'Fiction', isbn: '444-444', available: false },
  { id: 5, title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', category: 'Technology', isbn: '555-555', available: true },
]

const borrowings = []

// REST Endpoints

// 1. Return all books
app.get('/api/v1/books', (req, res) => {
  res.status(200).json({ success: true, data: books })
})

// 2. Return all borrowing records
app.get('/api/v1/borrowings', (req, res) => {
  res.status(200).json({ success: true, data: borrowings })
})

// 3. Create a new borrowing record
app.post('/api/v1/borrowings', (req, res, next) => {
  try {
    const { memberName, bookTitle, borrowDate, returnDate } = req.body
    
    // Simple validation (can be expanded)
    if (!memberName || !bookTitle) {
      return res.status(400).json({ success: false, message: 'Missing required fields' })
    }

    const newBorrowing = {
      id: borrowings.length + 1,
      memberName,
      bookTitle,
      borrowDate,
      returnDate,
      status: 'borrowed',
      createdAt: new Date()
    }
    
    borrowings.push(newBorrowing)
    res.status(201).json({ success: true, data: newBorrowing })
  } catch (error) {
    next(error) // Pass to global error handler
  }
})

// Route for testing the global error handler
app.get('/api/v1/error-test', (req, res, next) => {
  next(new Error('This is a test error!'))
})

// Global error-handling middleware (must be the last middleware)
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.message)
  res.status(500).json({ 
    success: false, 
    message: 'Internal Server Error' 
  })
}

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`)
})
