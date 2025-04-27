import React from 'react';
import mis from '../Components/Assets/mis.PNG';
import vi from '../Components/Assets/vi.PNG';
import cv from '../Components/Assets/cv.PNG';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';





const Mission = () => {
  return (
    <>              
    <Link to="/about" style={{ textDecoration: "none" }}>
     <div className="back-arrow">
        <FiArrowLeft size={24} />
      </div></Link>
    <div className="layout-container">
          <div className="text-section">
            <h2>Our Mission</h2>
            <p>To create value for our partners through excellence and innovation
            <ul>
                <li className='uol'>To be responsible partners with Respect to safety and environmental impact of all our operations and services</li>
                <li  className='uol'>To run the company on a sustainable financial basis of profitable growth</li>
                <li className='uol'>To recruit, retain and reward high- performance workforce</li> </ul></p>
          </div>
    
          <div className="image-section">
            <img src={mis} alt="Offshore Facility 1" />
          </div>
    
          <div className="image-section">
            <img src={vi} alt="Offshore Facility 2" />
          </div>
    
          <div className="text-section">
            <h2>Our Vision</h2>
            <p>To be recognized as the premier indigenous oil and gas service provider driven by excellence and innovation.</p>
          </div>
    
          <div className="text-section">
            <h2>Core Values</h2>
            <p>
            <ul>
                <li className='uol'>Excellence</li>
                <li  className='uol'>Professionalism</li>
                <li className='uol'>Innovation</li> 
                <li className='uol'>Corporate Social Responsibility</li>
                <li className='uol'>Integrity</li>
                <li className='uol'>Teamwork</li>
                </ul>
                </p>      
                </div>
    
          <div className="image-section">
            <img src={cv} alt="Aerial View of Facility" />
          </div>
        </div>
        </>
  )
}

export default Mission
