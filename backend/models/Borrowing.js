import mongoose from 'mongoose'

const borrowingSchema = new mongoose.Schema({
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: [true, 'Member ID is required']
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: [true, 'Book ID is required']
  },
  borrowDate: {
    type: Date,
    required: [true, 'Borrow date is required']
  },
  returnDate: {
    type: Date,
    required: [true, 'Return date is required']
  },
  status: {
    type: String,
    enum: {
      values: ['borrowed', 'returned', 'overdue'],
      message: '{VALUE} is not a valid status'
    },
    default: 'borrowed'
  }
}, { timestamps: true })

export default mongoose.model('Borrowing', borrowingSchema)
