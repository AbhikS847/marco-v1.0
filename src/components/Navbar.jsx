import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Container, Button, Offcanvas} from 'react-bootstrap';
import {FaBars} from 'react-icons/fa';

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
    <Navbar expand="lg" className="bg-body-custom">
      <Container>
        <Navbar.Brand href="/">MARCO</Navbar.Brand>
        <Nav className="me-auto d-none d-lg-flex">
        <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
        <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/explore" className={location.pathname === '/explore' ? 'active' : ''}>Explore</Nav.Link>
        <Nav.Link as={Link} to="/donate" className={location.pathname === '/donate' ? 'active' : ''}>
              Donate
            </Nav.Link>
          </Nav>
          <Button className="btn d-flex d-lg-none" style={{backgroundColor:'unset', border:'none'}} onClick={handleMenuToggle}><FaBars size={22} style={{color:'#F1AF4E'}} /></Button>
      </Container>
    </Navbar>
    <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>MARCO</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
          <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active-mobile' : ''} onClick={() => setShowMenu(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active-mobile' : ''} onClick={() => setShowMenu(false)}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/explore" className={location.pathname === '/explore' ? 'active-mobile' : ''} onClick={() => setShowMenu(false)}>
              Explore
            </Nav.Link>
            <Nav.Link as={Link} to="/donate" className={location.pathname === '/donate' ? 'active-mobile' : ''} onClick={() => setShowMenu(false)}>
              Donate
            </Nav.Link>
            {/* Add additional menu items as needed */}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Header;