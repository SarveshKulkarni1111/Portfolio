import React from 'react'
import "./Projects.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import Pulse from 'react-reveal/Pulse';
import LightSpeed from 'react-reveal/LightSpeed';


const Projects = () => {
  return (
    <div className='margin1' id='projects'>
    <h1>Recent Projects</h1>
    <div className='project-container'>
    <Pulse>
    
    <div className="cardP">
      <img src={project2} alt="Admin Dashboard" className="cardP-image1" />
      <div className="cardP-content">
        <h4 className="cardP-title">Admin Dashboard</h4>
        <p className="cardP-description">Developed a cloud based SaaS website with user authentication which shows the analytics of products, customers and have customizable
charts to display daily/monthly revenue and profit, breakdown of different metrics for revenue, marketing, quality and sales.The project aimed to provide a user-friendly interface for insightful data-driven decision-
making.</p>
        <button className="cardP-button"><a className='cardP-button-a' href='https://github.com/SarveshKulkarni1111/SAAS-Project' target="_blank" rel="noopener noreferrer">Github</a></button>
        <button className="cardP-button"><a className='cardP-button-a' href='https://sarveshkulkarni-saas-project.vercel.app/' target="_blank" rel="noopener noreferrer">Live Demo</a></button>
      </div>
    </div>
    
    <div className="cardP">
      <img src={project1} alt="Municipal Corporation's Complaint and Grievances Management System" className="cardP-image" />
      <div className="cardP-content">
        <h4 className="cardP-title">Municipal Corporation's Complaint and Grievances Management System</h4>
        <p className="cardP-description">Developed a Website to ditigize Municipal Corporation wherein an user can register, search and view timeline status of their complaints. On the backend implemented role based access control for Agent, Admin, Corporator and Mayor had different accesses according to their functions</p>
        <button className="cardP-button"><a className='cardP-button-a' href='https://github.com/Hrishabh17/Municipal_Corporation_Management' target="_blank" rel="noopener noreferrer">Github</a></button>
      </div>
    </div>
    
    </Pulse>
    </div>
    </div>
  )
}

export default Projects;