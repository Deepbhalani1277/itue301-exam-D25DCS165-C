import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import BooksPage from './pages/BooksPage'
import BorrowPage from './pages/BorrowPage'
import './App.css'

// App — root component that composes navbar and all three pages (no routing yet)
function App() {
  return (
    <div>
      <Navbar />
      <div className="app-container">
        <section id="home"><HomePage /></section>
        <section id="books"><BooksPage /></section>
        <section id="borrow"><BorrowPage /></section>
      </div>
    </div>
  )
}

export default App
