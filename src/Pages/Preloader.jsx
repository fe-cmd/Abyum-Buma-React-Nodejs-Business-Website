import React, { useEffect, useState } from 'react';
import { FaCog } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import './CSS/Preloader.css';
import aba from '../Components/Assets/aba.png';


const Preloader = () => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();
  
    useEffect(() => {
      setLoading(true);
  
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000); // simulate 3 seconds loading
  
      return () => clearTimeout(timer);
    }, [location]);
  
    if (!loading) return null;
  
    return (
      <div className="preloader-overlay">
        <div className="spinner">
          <FaCog className="gear gear1" />
           <div className="logo-circle1">
           <img src={aba} alt='' className="logo-image1" style={{ width:'150px', height:'150px'}}/>
                    
            </div>
          <FaCog className="gear gear2" />
        </div>
      </div>
    );
  };

export default Preloader;
