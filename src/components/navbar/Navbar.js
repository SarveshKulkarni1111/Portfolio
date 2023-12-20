import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

const CustomNavbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <Navbar className='nav-custom' bg='body' expand='lg'>
      <div className='container-fluid d-flex justify-content-between align-items-center w-100'>
        {/* <div className='d-flex justify-content-between align-items-center w-100'> */}
          <Navbar.Brand style={{ color: "#006B6A"}}>Sarvesh Kulkarni</Navbar.Brand>
          <div className="d-flex justify-content-between">
            <Navbar.Toggle aria-controls="navbarNavAltMarkup" onClick={handleNavToggle} />
          </div>
        {/* </div> */}
        <Navbar.Collapse id='navbarNavAltMarkup'>
          <Nav className='ms-auto'>
            <Nav.Link>
              <Link
                className='nav-link text-black'
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
                onClick={handleNavToggle}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className='nav-link text-black' 
                to='about'
                spy={true}
                smooth={true}
                onClick={handleNavToggle}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className='nav-link text-black'
                to='projects'
                spy={true}
                smooth={true}
                onClick={handleNavToggle}
              >
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className='nav-link text-black'
                to='awards'
                spy={true}
                smooth={true}
                onClick={handleNavToggle}
              >
                Awards
              </Link>
            </Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
            <button className='nav-link' style={{padding:"2px"}}>
              <Link
                className='nav-link text-white'
                to='contact'
                spy={true}
                smooth={true}
                onClick={handleNavToggle}
                style={{padding:"6px"}}
              >
                Contact me
              </Link>
            </button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
