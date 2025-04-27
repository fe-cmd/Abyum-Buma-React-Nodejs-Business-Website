import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import aba from '../Components/Assets/aba.png';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { MdWork } from 'react-icons/md';
import { GiGearHammer, GiGears } from 'react-icons/gi';
import { HiOutlineCog } from 'react-icons/hi';
import { FaRegCopyright, FaCogs, FaUsers  } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='footer'>
    <div class="footer__container">
        <div class="footer__links">
            <div class="footer__link--wrapper">
            <div className="logo-section1">
          <div className="logo-circle1" style={{ width:'200px', height:'100px'}}>
            <img src={aba} alt='' className="logo-image1" style={{ width:'200px', height:'100px'}}/>
          </div>
          <span className="logo-text1">ABYUM-BUMA OIL</span>
        </div>
        </div>
        <div class="footer__link--wrapper"> 
                <div class="footer__link--items">
                    <h2>The Company</h2>
                    <Link to="/about" style={{ textDecoration: "none" }}>
                    <a href=""><FaUsers style={{ marginRight: '8px', fontSize:'30px', color:'rgb(253, 128, 10)' }} />Who We Are</a></Link>
                        <Link to="/what_we_do" style={{ textDecoration: "none" }}>    
                    <a href="/"><MdWork style={{ marginRight: '8px', fontSize:'30px', color:'rgb(253, 128, 10)' }} />What We Do</a></Link>
                    <Link to="/company_contacts" style={{ textDecoration: "none" }}>    
                    <a href="/"><FiPhone style={{ marginRight: '8px', fontSize:'30px', color:'rgb(253, 128, 10)' }} />Contact us</a></Link>
                    <Link to="/equipments_tools" style={{ textDecoration: "none" }}>      
                    <a href="/"><GiGears style={{ marginRight: '8px', fontSize:'30px', color:'rgb(253, 128, 10)' }} />Equipments</a></Link>
                </div>
            </div>

            <div class="footer__link--wrapper">
                <div class="footer__link--items">
                    <h2>Contact</h2>
                    <a href="/"><FiMapPin style={{ marginRight: '8px', fontSize:'20px', color:'rgb(253, 128, 10)' }} /> No. 26, Oro Ago Street, Garki 2, Abuja, FCT Abuja</a>
              <a href="/"><FiPhone style={{ marginRight: '8px', fontSize:'20px', color:'rgb(253, 128, 10)'  }} /> +234(0)8022281616</a>
              <a href="/"><FiMail style={{ marginRight: '8px', fontSize:'20px', color:'rgb(253, 128, 10)'  }} /> info@abyunbumaoil.com</a>
                </div>

                
            </div>
        </div>
        
    </div>
    <div style={{ width:'100%', maxWidth:"900px", justifySelf: 'center', marginTop:"50px"}}>
    <hr/>
    <p class="website__right">          
    <FaRegCopyright style={{ marginRight: '6px', verticalAlign: 'middle' }} />
    2015 - 2025 Abyum-Boma Oil Limited. All rights reserved.
                </p>
    
    <p class="website__right1">
    Empowering & Leading Energy and 
    Logistics in Nigeria with Precision, Compliance, and unto Global Expertise.
    </p>
    </div>
       
           
            </div>
  )
}

export default Footer
