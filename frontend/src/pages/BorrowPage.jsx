import { useState } from 'react'

// BorrowPage — contains a controlled form to manage borrowing records
function BorrowPage() {
  // State for form fields
  const [formData, setFormData] = useState({
    memberName: '',
    bookTitle: '',
    borrowDate: '',
    returnDate: ''
  })

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Borrowing record submitted (check console)')
    console.log('Submitted Data:', formData)
    // We'll connect this to the API in Task 4
  }

  return (
    <div className="borrow-section">
      <h2>Borrow a Book</h2>
      <p>Fill out the form below to create a borrowing record.</p>

      <form className="borrow-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="memberName">Member Name</label>
          <input
            type="text"
            id="memberName"
            name="memberName"
            value={formData.memberName}
            onChange={handleChange}
            placeholder="Enter member name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bookTitle">Book Title</label>
          <input
            type="text"
            id="bookTitle"
            name="bookTitle"
            value={formData.bookTitle}
            onChange={handleChange}
            placeholder="Enter book title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="borrowDate">Borrow Date</label>
          <input
            type="date"
            id="borrowDate"
            name="borrowDate"
            value={formData.borrowDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="returnDate">Return Date</label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit Record</button>
      </form>

      {/* Live preview to satisfy exam requirement "Display at least one entered value on the page as state changes" */}
      <div className="preview-section">
        <h3>Live Preview</h3>
        <p><strong>Member:</strong> {formData.memberName || '...'}</p>
        <p><strong>Book:</strong> {formData.bookTitle || '...'}</p>
        <p><strong>Borrow Date:</strong> {formData.borrowDate || '...'}</p>
        <p><strong>Return Date:</strong> {formData.returnDate || '...'}</p>
      </div>
    </div>
  )
}

export default BorrowPage
