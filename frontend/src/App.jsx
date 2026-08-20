import HomePage from './pages/HomePage'
import BooksPage from './pages/BooksPage'
import BorrowPage from './pages/BorrowPage'
import './App.css'

// App — root component that composes all three pages together (no routing yet)
function App() {
  return (
    <div className="app-container">
      <HomePage />
      <BooksPage />
      <BorrowPage />
    </div>
  )
}

export default App
