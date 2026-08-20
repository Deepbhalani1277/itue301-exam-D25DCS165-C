import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Book title is required']
  },
  author: {
    type: String,
    required: [true, 'Book author is required']
  },
  category: {
    type: String,
    required: [true, 'Book category is required']
  },
  isbn: {
    type: String,
    unique: true,
    sparse: true // Allows nulls to not conflict if isbn is not provided, though the exam says unique.
  },
  available: {
    type: Boolean,
    default: true
  }
}, { timestamps: true })

export default mongoose.model('Book', bookSchema)
