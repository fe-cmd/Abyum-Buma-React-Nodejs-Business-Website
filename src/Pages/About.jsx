import React from 'react';
import './CSS/About.css';
import aba from '../Components/Assets/aba.png';

import ao13 from '../Components/Assets/ao13.PNG';
import his from '../Components/Assets/his.jpg';

import Mission from './Mission';
import Navbar from './Navbar';
import Footer from './Footer';
import Teams from './Teams';








const About = () => {

  
  
  return (
    <>
          <Navbar/>

          <div className="hero-container1">
      <div
        className="hero-slide1"
        style={{
          backgroundImage: `url(${ao13})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          minHeight: '80vh',
          minWidth: '350px',
          position: 'relative'
        }}
      >
          <div className="overlay1">
          <div className="hero-content1 ">
            <h1>About Us</h1>
          </div>
        </div>
      </div>
    </div>
     
    <div className="section4">
  <h1>Who We Are</h1>
  <p>
    ABYUN-BUMA OIL SERVICES LTD is an indigenous Nigerian company providing tailored solutions to the oil and gas sector.
    Its core services span Engineering (EPC), Civil Construction, Pipeline Services, Procurement, and Marine Logistics.
    The company was incorporated in 2015 and has since expanded into Dredging, Project Logistics, and crude oil marketing.
    ABYUN-BUMA also delivers offshore/onshore petroleum product trading and global supply chain operations.
    It integrates air and ocean freight with value-added logistics to meet complex industry demands.
    The company optimizes the flow of information, materials, and finances across its projects.
    Guided by the EPICS values — Excellence, Professionalism, Integrity, Commitment, and Safety — in every operation.
    Its management team champions good governance and strategic risk management.
    Committed to strict compliance with global standards and Nigerian content regulations.
    <span className="last-line">ABYUN-BUMA continues to empower communities while driving sustainable growth and competitive advantage.</span>
  </p>
</div>


      <Mission/>

      <Teams/>

    <div className="famfa-history-container">
      <div className="background-left" style={{ backgroundColor: "black" }} >
      <div className='logocircle3'>
        <img src={his} alt='' />
        </div>
      </div>
      <div className="background-right" style={{ backgroundColor: "rgb(8, 3, 65)"}} >
      <div className='logocircle2'>
        <img src={aba} alt='' />
        </div>
      </div>

      <div className="content-overlay">
        <h1>Abyun-Buma History</h1>
        <p>
          A history that began in 2015 continues today on the road to{' '}
          <span className="highlighted-word">
            energy transition
            <span className="underline-anim" />
          </span>
        </p>
      </div>
    </div>

          <Footer/>
    </>
      
   
  )
}

export default About
