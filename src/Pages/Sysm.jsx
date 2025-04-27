import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import Slider from 'react-slick';
import './CSS/Sysm.css';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import ao29 from '../Components/Assets/ao29.PNG';
import ao19 from '../Components/Assets/ao19.PNG';
import ao4 from '../Components/Assets/ao4.PNG';
import ao32 from '../Components/Assets/ao32.PNG';
import ao33 from '../Components/Assets/ao33.PNG';
import ao34 from '../Components/Assets/ao34.PNG';
import ao21 from '../Components/Assets/ao21.PNG';



    

const cardsData = [
    {
        img: ao4,
        title: "(EPICS)",
        text: (
  <div>
    <p>
      ABYUN-BUMA OIL SERVICES LTD provides a complete range of civil construction services across the Niger-Delta region and the entire country. With extensive experience in civil construction, car park development, plant hire, rock hammering, general road works, pipeline construction, and both detailed and bulk earthworks, our skilled and experienced workforce is dedicated to delivering superior, competitive services—ensuring timely project completion within budget and exceeding client quality expectations. We are committed to offering high-quality, professional services in the civil construction industry, with expertise in both construction and maintenance across the following areas:
    </p>
    <ul>
      <li><strong>Engineering Procurement, Installation and Construction (EPIC)</strong></li>
      <li><strong>Marine Logistics and Support Services</strong></li>
      <li><strong>Valves Sales and Replacement</strong></li>
      <li><strong>Supply and Replacement of Pipelines</strong></li>
      <li><strong>Site Works:</strong> Including footings, floor preparation, and utility services</li>
      <li><strong>Grouting:</strong> Pressure grout stabilization of foundations and beams</li>
      <li><strong>Pipeline Inspections</strong></li>
    </ul>
  </div>
),

      },
    {
      img: ao29,
      title: "INSPECTION SERVICES",
      text: (
        <div>
          <p>
          ABYUN-BUMA OIL SERVICES LTD
          specializes in Maintenance inspections performing nondestructive testing (NDT) inspection on all down-hole drilling inventory ranging from OCTG & drill pipes, crown to the drill bits. All of Dove wells,
           inspectors are trained on the job and certified.
          </p>
          
        </div>
      ),
    },
    {
      img: ao34,
      title: "SURFACE PROTECTION",
      text: (
        <div>
          <p>
            Engage in efficient 
            Surface protection on materials used in oil processes 
          </p>
        </div>
      ),
    },
    {
      img: ao32,
      title: "PROCUREMENTS",
      text: (
        <div>
         <p>ABYUN-BUMA OIL SERVICES LTD Sources and coordinates delivery of high-quality materials and services to support client’s operations and projects. Out supply chain management team, which includes sourcing, logistics, and contraction specialists, works to ensure the highest standard 
         of ethical conduct are maintained in all their operations.</p>
        </div>
      ),
    },
    {
      img: ao21,
      title: "PROVISION AND CALIBRATION OF METERS",
      text: (
        <div>
          <p>
          An Oil and Gas metering system is a collection 
          of specialized meters and equipment that measures 
          the volume of oil and natural gas flowing 
          through pipelines.
          </p>
        </div>
      ),
    },
    {
      img: ao19,
      title: "OIL AND GAS METERING SYSTEMS",
      text: (
        <div>
          <p>
            Real time monitoring, measurement of oil and gas metering facilities and infrastructures</p>
        </div>
      ),
    },
    {
      img: ao33,
      title: "MARITIME SERVICES",
      text: (
  <div>
    <p>
      We lease marine equipment, provide maintenance services, and offer maritime consultancy. In partnership with technical organizations both locally and internationally—specializing in marine equipment manufacturing, transportation, and support services—we supply and repair a wide range of marine equipment and facilities, including:
    </p>
    <ul>
      <li><strong>Speed Boats:</strong> Sea-going and swamp modules</li>
      <li><strong>Material Barges</strong></li>
      <li><strong>Oil, Fuel, and Ramp Barges</strong></li>
      <li><strong>Tug Boats</strong></li>
      <li><strong>Executive House Boats</strong></li>
      <li><strong>Coastal Tankers</strong></li>
      <li><strong>Personnel Carrier (Crew) Boats</strong></li>
      <li><strong>Work Barges:</strong> Various sizes</li>
      <li><strong>Marine Ambulance</strong></li>
      <li><strong>Jack-up Barge</strong></li>
    </ul>
  </div>
),

    },
  ];
  

const Sysm = () => {
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
         <Link to="/what_we_do" style={{ textDecoration: "none" }}>
          <div className="back-arrow1">
             <FiArrowLeft size={24} />
           </div></Link>
           <div className="section4">
  <h1>Other Top Services...</h1></div>
           <div className="slider-container" style={{ marginBottom:'50px'}}>
        <Slider {...settings}>
          {cardsData.map((card, index) => (
            <div key={index}>
            <div className="slide-content">
              <img src={card.img} alt={`Slide ${index + 1}`} />
              <div className="slide-text">
              <h2>{card.title}</h2>
              {card.text}
              </div>
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default Sysm
