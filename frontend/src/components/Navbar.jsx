// Navbar — navigation component with links to all pages
// Links are plain anchors for now, will switch to React Router in Task 2
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">📚 LibraryMS</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#books">Books</a></li>
        <li><a href="#borrow">Borrow</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
