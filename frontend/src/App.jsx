import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import BooksPage from './pages/BooksPage'
import BorrowPage from './pages/BorrowPage'
import './App.css'

// App — root component that composes navbar and routes
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/borrow" element={<BorrowPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
