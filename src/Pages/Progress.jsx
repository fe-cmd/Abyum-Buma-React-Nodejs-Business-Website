import React from 'react';
import './CSS/Progress.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ao37 from '../Components/Assets/ao37.PNG';
import ao38 from '../Components/Assets/ao38.PNG';
import ao40 from '../Components/Assets/ao40.PNG';
import ao41 from '../Components/Assets/ao41.PNG';
import ao42 from '../Components/Assets/ao42.PNG';
import ao43 from '../Components/Assets/ao43.PNG';
import ao44 from '../Components/Assets/ao44.PNG';
import ao45 from '../Components/Assets/ao45.PNG';





const cardsData = [
    { img: ao37 },
    { img: ao38 },
    { img: ao40 },
    { img: ao41 },
    { img: ao42 },
    { img: ao43 },
    { img: ao44 },
    { img: ao45 },
  ];



const Progress = () => {

    const settings = {
        dots: true, // Show dots at the bottom
        infinite: true, // Infinite scroll
        speed: 700, // Transition speed
        slidesToShow: 1, // Display one slide at a time
        slidesToScroll: 1,
        autoplay: true, // Enable auto slide
        autoplaySpeed: 5000, // Slide interval 10 seconds
        pauseOnHover: true,
        arrows: true,
      };
  
  return (
    <>
          <Navbar/>
          <div className="hero-container1">
                          <div
                            className="hero-slide1"
                            style={{
                              backgroundImage: `url(${ao37})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              width: '100%',
                              height: '100vh',
                              position: 'relative'
                            }}
                          >
                              <div className="overlay1">
                              <div className="hero-content1 ">
                                <h1>Progress Work</h1>
                              </div>
                            </div>
                          </div>
                        </div>

          <div className="section4">
  <h1>Services Workflow in Progress...</h1>
  <p>New Fuel Stations under constructions</p>
  </div>
           <div className="slider-container" style={{marginBottom:'100px'}}>
        <Slider {...settings}>
          {cardsData.map((card, index) => (
            <div key={index}>
            <div className="slide-content">
              <img src={card.img} alt={`Slide ${index + 1}`} />
             
            </div>
            </div>
          ))}
        </Slider>
      </div>
    <Footer/>

</>
  )
}

export default Progress
