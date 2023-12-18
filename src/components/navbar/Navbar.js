import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
        <h4>Sarvesh Kulkarni</h4>
        <ul>
          <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</li>
          <li onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}>About us</li>
          {/* <li onClick={() => window.scrollTo({ top: 1400, behavior: "smooth" })}>Awards</li> */}
        </ul>
        <button onClick={() => window.scrollTo({ top: 2105, behavior: "smooth" })}>Contact me</button>
    </div>
  )
}

export default Navbar;