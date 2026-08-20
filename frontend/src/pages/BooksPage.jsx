import { useState, useEffect } from 'react'
import BookCard from '../components/BookCard'

// BooksPage — parent component that fetches book data from the API
function BooksPage() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch books from Express API when component mounts
    fetch('http://localhost:5000/api/v1/books')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch books')
        }
        return response.json()
      })
      .then(data => {
        setBooks(data.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="books-section">
      <h2>Books Collection</h2>
      
      {loading && <p>Loading books...</p>}
      
      {error && (
        <div style={{ color: 'red', padding: '10px', border: '1px solid red', borderRadius: '4px' }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      
      {!loading && !error && (
        <div className="books-grid">
          {books.map((book, index) => (
            <BookCard
              key={book.id || index}
              title={book.title}
              author={book.author}
              category={book.category}
              available={book.available}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default BooksPage
