import React from 'react';
import './CSS/Equipments.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ao10 from '../Components/Assets/ao10.PNG';
import ao13 from '../Components/Assets/ao13.PNG';
import ao16 from '../Components/Assets/ao16.PNG';
import ao12 from '../Components/Assets/ao12.PNG';
import ao35 from '../Components/Assets/ao35.PNG';
import ao20 from '../Components/Assets/ao20.PNG';




const cardsData = [
    { img: ao10 },
    { img: ao16 },
    { img: ao12 },
    { img: ao13 },
    { img: ao35 },

    
  ];

const Equipments = () => {
  return (
    <>
          <Navbar/>

          <div className="hero-container1">
                      <div
                        className="hero-slide1"
                        style={{
                          backgroundImage: `url(${ao20})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          width: '100%',
                          height: '90vh',
                          position: 'relative',
                        }}
                      >
                        <div className="overlay1">
                          <div className="hero-content1 ">
                            <h1>Equipments</h1>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="section4">
  <h1>Some of our Major Operating Equipments</h1></div>

     <div className="cards-container1">
     {cardsData.map((card, index) => (
    <div className="circle-wrapper" key={index}>
      <img src={card.img} alt="service" className="circle-image" />
    </div>
  ))}
            </div>
    <Footer/>
    </>
  )
}

export default Equipments
