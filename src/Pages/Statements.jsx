import React from 'react';
import './CSS/Statements.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ao36 from '../Components/Assets/ao36.PNG';
import ao37 from '../Components/Assets/ao37.PNG';



const Statements = () => {
  return (
    <>
          <Navbar/>
          <div className="section4">
  <h1>Our Profile Statements...</h1></div>

    <div className="layout-container">
              <div className="text-section">
                <h2>Mission Statement</h2>
                <p>“To be at the forefront of creativity by providing responsive 
                Design solutions through the use of state of the art technology to give our clients deserved comfort.”</p>
              </div>
        
              <div className="image-section">
              <h2>QUALITY POLICY STATEMENT</h2>
              <p>Our quality procedures are built on a tripod of Integrities:</p>
              <ul>
                    <li className='uol'>The Integrity of the individual.</li>
                    <li  className='uol'>The Integrity of the Oil and Gas Method</li>
                    <li className='uol'>The Integrity of the crude oil refinery and others.</li>
                    </ul>
              </div>
        
              <div className="image-section">
                <img src={ao37} alt="Offshore Facility 2" />
              </div>
        
              <div className="text-section">
                <h2>Safety policy Statement</h2>
                <p>The safety and life of the individual is superior 
                to any facility but we will strive to preserve both.</p>
              </div>
        
              <div className="text-section">
                <h2>HEALTH, SAFETY & ENVIRONMENT
</h2>
                <p>
                At ABYUN-BUMA OIL SERVICES LTD,
we recognize that health, safety & environmental issues relevant to our operations are a fundamental part of her business.
Our objective is to meet and where possible, exceed the requirements of all applicable legislations & laws. This will be achieved as we address the needs of the business & maintain our HSE management system
                    </p>      
                    </div>
        
              <div className="image-section">
              <h2>General rules of conduct</h2>
              <ul>
                    <li className='uol'>Drug and alcohol </li>
                    <li  className='uol'>Cell phones </li>
                    <li className='uol'>Violence/ weapons</li>
                    <li className='uol'>Security and site access</li>
                    <li className='uol'>Personal protective Equipment </li>
                    <li className='uol'>Electrical Safety</li>
                    <li className='uol'>Cranes hoists </li>
                    <li className='uol'>Hand Tools </li>
                    <li className='uol'>Scaffolding</li>
                    <li className='uol'>Communication/Emergency Response</li>

                    </ul>
              </div>

              <div className="image-section">
                <img src={ao36} alt="Aerial View of Facility" />
              </div>

              <div className="text-section">
                <h2>PROJECT MANAGEMENT CONTROL
</h2>
                <p>
                At ABYUN-BUMA OIL SERVICES LTD, we understand the importance of
project control as it is the basis a project success. We handle it as a comprehensive management method that extends into personal management & quality management.
With project control, we monitor the project based on a sound project plan
in order to detect deviations from the planned values as early as possible. The deviations we eliminate with effective measures so as the project returns to the planned course as far as possible   
                    </p>      
                    </div>


            </div>

    <Footer/>

    </>
  )
}

export default Statements
