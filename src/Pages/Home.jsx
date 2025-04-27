import React, { useEffect, useRef, useState } from 'react';
import './CSS/Home.css';
import { AnimatePresence, motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaRegCopyright } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import aba from '../Components/Assets/aba.png';
import ao3 from '../Components/Assets/ao3.PNG';
import ao4 from '../Components/Assets/ao4.PNG';
import ao5 from '../Components/Assets/ao5.PNG';
import ao6 from '../Components/Assets/ao6.PNG';
import ao7 from '../Components/Assets/ao7.PNG';
import ao8 from '../Components/Assets/ao8.PNG';
import ao9 from '../Components/Assets/ao9.PNG';
import ao10 from '../Components/Assets/ao10.PNG';
import ao11 from '../Components/Assets/ao11.PNG';
import ao12 from '../Components/Assets/ao12.PNG';
import ao13 from '../Components/Assets/ao13.PNG';
import ao14 from '../Components/Assets/ao14.PNG';
import ao15 from '../Components/Assets/ao15.PNG';
import ao16 from '../Components/Assets/ao16.PNG';
import ao18 from '../Components/Assets/ao18.PNG';
import ao19 from '../Components/Assets/ao19.PNG';
import ao20 from '../Components/Assets/ao20.PNG';
import ao21 from '../Components/Assets/ao21.PNG';
import ao22 from '../Components/Assets/ao22.PNG';
import ao23 from '../Components/Assets/ao23.PNG';

import Navbar from './Navbar';
import Footer from './Footer';






const products = [
    { id: 1, image: ao15, description:"Engage in real Maritime Services, Marine Equipment leasing,maintenance and consultancy services "},
    { id: 2, image: ao19, description:"Effective workflow of Oil & Gas metering systems to avoid financial discrepancies, compliance issues, safety risks, operational inefficiencies, and environmental impact "},
    { id: 3, image: ao20, description:"Engineering Procurement, Installation & Construction (EPICS) and grouting-including pressure grout stabilization of foundations and beams" },
    { id: 4, image: ao21, description:"Provision of efficient meters and Calibrations for effective precise and accurate measurement to avoid data inconsistencies" },
    { id: 5, image: ao22, description:"Effective Oil and gas concessions, productions and development improvement of existing facilities, plants & Machineries"},
    { id: 6, image: ao23, description:"Excellent usefulness of technology, industry expertise & world class research facility for strongly built businesses to reach thier full potentials through satisfaction"},
    
  ];

const slides = [
    {
      image: ao6,
      title: "Creating Value Through Excellence",
      description:
        "We drive value through innovation, responsibility, and sustainable growth while ensuring safety and environmental responsibility.",
    },
    {
      image: ao7,
      title: "Premier Indigenous Service Provider",
      description:
        "Driven by excellence and innovation, we aim to be recognized as the leading indigenous oil and gas service provider.",
    },
    {
      image: ao9,
      title: "Pioneering Oil and Gas Services",
      description:
        "As a dynamic service provider to the oil and gas industry in Nigeria, we deliver exceptional engineering, procurement, marine logistics, and trading services.",
    },
    {
      image: ao3,
      title: "Sustainable Competitive Advantage",
      description:
        "Strategically positioned with a focus on good corporate governance and risk management, we aim to achieve sustainable competitive advantage.",
    },
    {
      image: ao10,
      title: "Global Standards, Local Impact",
      description:
        "Adhering to global operational standards, we ensure compliance with local content and cabotage laws while fostering development in the communities we serve.",
    },
  ];
  
  
const slideVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

const Home = () => {

  const [index, setIndex] = useState(0);  
const topRef = useRef(null);
const bottomRef = useRef(null);
const [topInView, setTopInView] = useState(false);
const [bottomInView, setBottomInView] = useState(false);

useEffect(() => {
    const topObserver = new IntersectionObserver(
      ([entry]) => setTopInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    const bottomObserver = new IntersectionObserver(
      ([entry]) => setBottomInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (topRef.current) topObserver.observe(topRef.current);
    if (bottomRef.current) bottomObserver.observe(bottomRef.current);

    return () => {
      if (topRef.current) topObserver.unobserve(topRef.current);
      if (bottomRef.current) bottomObserver.unobserve(bottomRef.current);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  

    useEffect(() => {
      const section2 = document.querySelector('.section2');
      const img = document.querySelector('.imgside');
  
      // Create an intersection observer to detect when the section is in view
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add 'in-view' class to animate image and change background color
              section2.classList.add('in-view');
            } else {
              // Remove 'in-view' class when not in view
              section2.classList.remove('in-view');
            }
          });
        },
        { threshold: 0.5 } // Trigger when 50% of the section is in view
      );
  
      observer.observe(section2);
  
      return () => observer.disconnect();
    }, []);
  
    useEffect(() => {
        const section3 = document.querySelector('.section3');
        const img = document.querySelector('.imgside1');
    
        // Create an intersection observer to detect when the section is in view
        const observer1 = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Add 'in-view' class to animate image and change background color
                section3.classList.add('in-view');
              } else {
                // Remove 'in-view' class when not in view
                section3.classList.remove('in-view');
              }
            });
          },
          { threshold: 0.5 } // Trigger when 50% of the section is in view
        );
    
        observer1.observe(section3);
    
        return () => observer1.disconnect();
      }, []);
    
    // Function to handle download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Abyum_Buma_Company_Profile.pdf';  // path to your PDF in public folder
    link.download = 'Abyum_Buma_Company_Profile.pdf'; // this is the name user will see
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <>
       <Navbar/>

      <div className="hero-container">
        <AnimatePresence mode="wait">
        <motion.div
  key={index}
  className="hero-slide"
  variants={slideVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={{ duration: 1 }}
>
  <div
    className="background-zoom"
    style={{ backgroundImage: `url(${slides[index].image})` }}
  ></div>

  <div className="overlay">
    <div className="hero-content">
      <h1>{slides[index].title}</h1> 
      <p>{slides[index].description}</p>  
      <div className="hero-buttons">
      <Link to="/what_we_do" style={{ textDecoration: "none" }}>
      <button className="read-more-button">Read More →</button></Link>
      <button className="download-button" 
      style={{ backgroundColor:'rgb(8, 3, 65)', 
      color:'white', fontSize:'15px', 
      padding:'20px'}}
      onClick={handleDownload}
      >
      Download Our Profile
      </button>
    </div>
  </div>
  </div>

  
</motion.div>
        </AnimatePresence>
      </div>

      <div className="section1">
        <h1>Shaping the Future of Energy</h1>
        <p>ABYUN-BUMA Oil Services Ltd. is a leading indigenous provider in Nigeria’s oil and gas industry, delivering innovative engineering, procurement, and logistics solutions. Focused on sustainable growth and community development, we drive progress in the energy sector while adhering to global standards and local regulations. Through excellence and strategic governance, we contribute to Nigeria's 
        economic development and environmental responsibility.</p>
        <Link to="/what_we_do" style={{ textDecoration: "none" }}>
        <button>Learn more about us →</button></Link>
      </div>
      

      <div className="section2">
        <div className="leftview">
        <h1>Explore to Feel our Impact</h1>
        <p>Discover how ABYUN-BUMA Oil Services Ltd. is 
        transforming Nigeria’s oil and gas industry. From innovative engineering solutions to sustainable logistics, we are making a significant impact. Learn more about our commitment to community development, global standards, and driving a resilient energy future.</p>
        <Link to="/system_services" style={{ textDecoration: "none" }}>
        <button>Learn more about us →</button></Link>
        </div>
        <div className="rightview">
            <img className="imgside" src={ao11} alt=''/>
        </div>
      </div>

      <div className="section1">
        <p>ABYUN-BUMA Oil Services Ltd. delivers top-tier civil construction and EPIC services across Nigeria’s energy sector. From precision pipeline work to marine logistics and foundation grouting, we ensure reliable project execution. With advanced equipment and expert teams, we power progress through quality and innovation. Discover our impact in trans
        forming infrastructure through service excellence.</p>
        <Link to="/what_we_do" style={{ textDecoration: "none" }}>
        <button>Learn more →</button></Link>
      </div>

      <div className="image-layout-wrapper">
  <img src={ao12} alt="Left" className="side-image left" />

  {/* Trigger for TOP image */}
  <div ref={topRef} className="trigger-area top-trigger">
    <div className={`middle-image top ${topInView ? 'animate-down' : 'initial-white'}`}>
      <img src={ao13} alt="Top" />
    </div>
  </div>

  {/* Trigger for BOTTOM image */}
  <div ref={bottomRef} className="trigger-area bottom-trigger">
    <div className={`middle-image bottom ${bottomInView ? 'animate-up' : 'initial-white'}`}>
      <img src={ao14} alt="Bottom" />
    </div>
  </div>

  <img src={ao16} alt="Right" className="side-image right" />
</div>

<div className="section3">
        <div className="leftview">  
        <h1>Environmental Service Progress</h1>
        <p>We remain committed to driving environmental service progress with responsibility and care. Currently, we are actively working on key sectors identified for long-term sustainability. Our initiatives are still underway, with significant efforts focused on creating lasting environmental impact. We continue to make 
        strides toward achieving meaningful progress in these areas.</p>
    <Link to="/operation_progress" style={{ textDecoration: "none" }}>
        <button>Learn more →</button> </Link>
        </div>
        <div className="rightview">
            <img className="imgside1" src={ao18} alt=''/>
        </div>
      </div>

      <div className="product-list-container">
      <h2 className='head2'>Exclusive Insights from us to you</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="image-container5">
              <img src={product.image} alt='' className="product-image" />
            </div>
            <div className='poptext'>
            <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
   
   <Footer/>
        

    </>
  )
}

export default Home
