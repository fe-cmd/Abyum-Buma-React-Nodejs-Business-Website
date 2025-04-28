import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import be5 from '../Components/Assets/be5.jpg';
import be6 from '../Components/Assets/be6.jpg';
import be7 from '../Components/Assets/be7.jpg';
import cor from '../Components/Assets/cor.jpg';
import cor1 from '../Components/Assets/cor1.jpg';


import { FaArrowRight } from 'react-icons/fa';




const cardsData = [
    {
      img: cor,
      title: 'Exploration/Development Team',
     
    },
    {
      img: cor1,
      title: 'Drilling Team',
     
    },
    {
      img: be5,
      title: 'Production Team',
     
    },
    {
      img: be6,
      title: 'Facilitites Team',
      
    },
    {
      img: be7,
      title: 'Infrastructure / Installation Team',
      
    },
    
  ];

const Teams = () => {
  return (
    <>              
        <Link to="/about" style={{ textDecoration: "none" }}>
         <div className="back-arrow">
            <FiArrowLeft size={24} />
          </div></Link>
          <div className="section1">
  <h1>Our Teams of Expertise includes</h1></div>
     <div className="cards-container">
          {cardsData.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.img} alt="service" className="card-image" />
              <div className="card-text">
                <h3>
                  <FaArrowRight className="arrow-icon" />
                  {card.title}
                </h3>
               
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default Teams
