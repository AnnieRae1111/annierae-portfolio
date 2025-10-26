import { useState } from 'react';
import '../../css/NavbarResponsive.css';
// import { Link } from 'react-router-dom';
// import Resume from '../../assets/AnnieRae-Resume.pdf';
// import FullStackResume from '../../assets/AnnieRae-Resume-2025.pdf';
import Resume from '../../assets/AnnieRae-Resume-2025 .pdf';

import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';

const NavbarResponsive = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-container justify-content-end">
      <Navbar className="flexend" color="faded" expand="md" light>
        <NavbarToggler
          className="me-2 start toggler"
          onClick={() => setIsOpen(!isOpen)}
        />
        <Collapse className="collapse" isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="navlink " href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" href="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" href="/portfolio">
                Portfolio
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink className="navlink" href="/services">
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" href="/inquire">
                Inquire
              </NavLink>
            </NavItem> */}
            <a href={Resume} download>
              {' '}
              <Button className="nav-button">Resume</Button>
            </a>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarResponsive;
