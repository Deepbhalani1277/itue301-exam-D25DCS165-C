import { Link } from 'react-router-dom'

// Navbar — navigation component with links to all pages using React Router
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">📚 LibraryMS</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/borrow">Borrow</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
