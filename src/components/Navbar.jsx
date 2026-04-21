import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Notes App</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/notes/new">Tambah</Link>
        <Link to="/archives">Arsip</Link>
      </div>
    </nav>
  );
}

export default Navbar;