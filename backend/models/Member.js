import mongoose from 'mongoose'

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Member name is required']
  },
  email: {
    type: String,
    required: [true, 'Member email is required'],
    unique: true
  },
  phone: {
    type: String
  },
  department: {
    type: String,
    required: [true, 'Department is required']
  }
}, { timestamps: true })

export default mongoose.model('Member', memberSchema)
