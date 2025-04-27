import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './CSS/Operations.css';
import ao4 from '../Components/Assets/ao4.PNG';

import Sysm from './Sysm';



import Primary from './Primary';





const Operations = () => {
  return (
      <>
      <Navbar/>

      <div className="hero-container1">
            <div
              className="hero-slide1"
              style={{
                backgroundImage: `url(${ao4})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100vh',
                position: 'relative'
              }}
            >
              <div className="overlay1">
                <div className="hero-content1 ">
                  <h1>Operations</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="section4" >
        <h1>Services We Offer </h1>
        <p>ABYUN-BUMA OIL SERVICES LTD is a diversified oil and gas company operating across upstream, downstream, and exploration sectors. 
        Its upstream services include mechanical and civil engineering, asset integrity management, and the provision of heavy-duty equipment. 
        Downstream operations focus on marketing, supply, and trading of petroleum products like PMS, AGO, and ATK, as well as fleet management. 
        The company is actively involved in offshore exploration, appraisal, development, and production, supported by expert teams in drilling, 
        facilities, and infrastructure. They maintain strong partnerships and adhere to excellence and local involvement. 
        Additional services include pipeline construction and inspection, procurement, metering systems, and safety services. 
        Maritime operations offer leasing, maintenance, and consultancy, covering a wide range of marine vessels and equipment. 
        The company is also expanding with new fuel stations and a gas cylinder ownership initiative. 
        With a strong civil construction presence, ABYUN-BUMA ensures quality, timely delivery, and technical excellence across all its services.
        </p>
      </div>

     <Primary/>
           
      <Sysm/>

      <Footer/>
    </>
  )
}

export default Operations;
