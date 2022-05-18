import { Link } from 'react-router-dom';
import '../../css/Navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navlink">
          Home
        </Link>
        <Link to="/portfolio" className="navlink">
          Portfolio
        </Link>
        <Link to="/about" className="navlink">
          About
        </Link>
        <Link to="/services" className="navlink">
          Services
        </Link>
        <Link to="/inquire" className="navlink">
          Inquire
        </Link>
        <Link to="#" className="navlink resume">
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
