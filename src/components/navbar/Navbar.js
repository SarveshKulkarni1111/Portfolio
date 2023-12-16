import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
        <h4>Sarvesh Kulkarni</h4>
        <ul>
          <li>Home</li>
          <li>About us</li>
        </ul>
        <button>Contact me</button>
    </div>
  )
}

export default Navbar;