import BookCard from '../components/BookCard'

// Sample book data — hardcoded for Task 1 (will come from API in Task 4)
const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', available: true },
  { title: 'Clean Code', author: 'Robert C. Martin', category: 'Technology', available: false },
  { title: 'Sapiens', author: 'Yuval Noah Harari', category: 'History', available: true },
  { title: 'The Alchemist', author: 'Paulo Coelho', category: 'Fiction', available: false },
  { title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', category: 'Technology', available: true },
]

// BooksPage — parent component that owns the book data and passes it down to BookCard
function BooksPage() {
  return (
    <div className="books-section">
      <h2>Books Collection</h2>
      <div className="books-grid">
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            category={book.category}
            available={book.available}
          />
        ))}
      </div>
    </div>
  )
}

export default BooksPage
