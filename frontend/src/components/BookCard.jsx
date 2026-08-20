// BookCard — reusable component that displays a single book's info
// Props: title, author, category, available (all passed from parent)
function BookCard({ title, author, category, available }) {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Category:</strong> {category}</p>
      <p>
        <strong>Status: </strong>
        <span className={`status-badge ${available ? 'status-available' : 'status-unavailable'}`}>
          {available ? '✅ Available' : '❌ Not Available'}
        </span>
      </p>
    </div>
  )
}

export default BookCard
