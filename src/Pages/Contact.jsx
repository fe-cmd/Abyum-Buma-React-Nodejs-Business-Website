import React from 'react';
import './CSS/Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';
import be from '../Components/Assets/be.jpg';
import be1 from '../Components/Assets/be1.jpg';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';



const Contact = () => {
  return (
    <>
          <Navbar/>

          <div className="hero-container1">
                <div
                  className="hero-slide1"
                  style={{
                    backgroundImage: `url(${be})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100vh',
                    position: 'relative',
                  }}
                >
                    <div className="overlay1">
                    <div className="hero-content1 ">
                      <h1>Contact Us</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section4">
        <h1 >Contact Abyun-Buma</h1>
        <p >For specific enquiries about 
        Abyun-Buma Oil Nigeria Limted, use the contact information below.</p>
      </div>

      <div className="famfa-history-container1">
  <div className="background-left1" style={{ backgroundColor: "rgb(8, 3, 65)" }}>
    <div className="footer__link--items" style={{ marginTop: '5vh' }}>
      <h2 className='rep' >Abyun-Buma Details</h2>
      <button className='but'>
        <FiMapPin className='gru1'  />
        No. 26, Oro Ago Street, Garki 2, Abuja, FCT Abuja
      </button>
      <button className='but'>
        <FiPhone className='gru' />
        +234(0)8022281616
      </button>
      <button className='but'>
        <FiMail className='gru' />
        info@abyunbumaoil.com
      </button>
    </div>
  </div>

  <div className="background-right1" style={{ backgroundColor: "rgb(253, 128, 10)" }}>
    <div className="circle-wrapper1">
      <img src={be1} alt='' className="circle-image1" />
    </div>
  </div>
</div>


    <Footer/>

    </>
  )
}

export default Contact
