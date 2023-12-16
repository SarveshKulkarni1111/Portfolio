import React from 'react'
import "./header.css"
import profile from "../../assets/Profile.jpg";
import Navbar from '../navbar/Navbar';

const Header = () => {
  return (
    <div>
    <Navbar />
    <div className='header-container'>
    <div className='row'>
    <div className='col'>
    <h1 >Hello, I'm Sarvesh Kulkarni.</h1>
    <h1>I'm a full-stack web developer.</h1>
    </div>
    <div className='col'>
    <img src={profile} alt="profile img" className="rounded-image" />
    </div>
    </div>
    </div>
    </div>
  )
}

export default Header