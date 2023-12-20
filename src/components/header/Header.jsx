import React from 'react'
import "./header.css"
import profile from "../../assets/Profile.jpg";
import Navbar from '../navbar/Navbar';
import Resume from "../../assets/SarveshKulkarniResume16.pdf";

const Header = () => {
  return (
    <div id='home'>
    <Navbar />
    <div className='header-container '>
    <div className='content-container'>
        <h1>Hello, I'm Sarvesh Kulkarni.</h1>
        <h1>I'm a full-stack web developer.</h1>
        <a href={Resume} download="Sarvesh_Kulkarni_Resume">
         <button type="button" className='button-cv'>Download CV</button>
         </a>
        </div>
        <img src={profile} alt="profile img" className="rounded-image" />
</div>

    </div>
  )
}

export default Header