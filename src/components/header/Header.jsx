import React from 'react';
import "./header.css";
import profile from "../../assets/Profile.jpg";
import Navbar from '../navbar/Navbar';
import Resume from "../../assets/Sarvesh_Kulkarni_Resume6.pdf";
import Typewriter from "../Typewriter";
import Zoom from 'react-reveal/Zoom';

const Header = () => {
  return (
    <div id='home'>
      <Navbar />
      <div className='header-container'>
        <div className='content-container'>
        <Zoom cascade>
            <h1>Hello, I'm Sarvesh Kulkarni.</h1>
            </Zoom>
            <h1><Typewriter text="I'm a full-stack web developer." delay={100} /></h1>
        </div>
        <div className='button-container'>
        <Zoom bottom cascade>
        <a href={Resume} download="Sarvesh_Kulkarni_Resume">
            <button type="button" className='button-cv'>Download CV</button>
          </a>
          </Zoom>
          </div>
          <Zoom>
        <img src={profile} alt="profile img" className="rounded-image" />
        </Zoom>
      </div>
    </div>
  );
}

export default Header;
