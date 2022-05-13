import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/inquire">Inquire</Link>
      </div>
    </nav>
  );
};

export default NavBar;
