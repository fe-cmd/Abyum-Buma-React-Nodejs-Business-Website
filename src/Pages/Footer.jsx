import { Link } from 'react-router-dom';
import React from 'react';
import aba from '../Components/Assets/aba.png';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { MdWork } from 'react-icons/md';
import { GiGears } from 'react-icons/gi';
import { FaRegCopyright, FaUsers  } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='footer'>
  <div className="footer__container">
    <div className="footer__links">
      <div className="footer__link--wrapper">
        <div className="logo-section1">
          <div className="logo-circle1" style={{ width: '200px', height: '100px' }}>
            <img src={aba} alt='' className="logo-image1" style={{ width: '200px', height: '100px' }} />
          </div>
          <span className="logo-text1">ABYUM-BUMA OIL</span>
        </div>
      </div>
      <div className="footer__link--wrapper">
        <div className="footer__link--items">
          <h2>The Company</h2>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <button><FaUsers style={{ marginRight: '8px', fontSize: '30px', color: 'rgb(253, 128, 10)' }} />Who We Are</button>
          </Link>
          <Link to="/what_we_do" style={{ textDecoration: "none" }}>
            <button><MdWork style={{ marginRight: '8px', fontSize: '30px', color: 'rgb(253, 128, 10)' }} />What We Do</button>
          </Link>
          <Link to="/company_contacts" style={{ textDecoration: "none" }}>
            <button><FiPhone style={{ marginRight: '8px', fontSize: '30px', color: 'rgb(253, 128, 10)' }} />Contact us</button>
          </Link>
          <Link to="/equipments_tools" style={{ textDecoration: "none" }}>
            <button><GiGears style={{ marginRight: '8px', fontSize: '30px', color: 'rgb(253, 128, 10)' }} />Equipments</button>
          </Link>
        </div>
      </div>

      <div className="footer__link--wrapper">
        <div className="footer__link--items">
          <h2>Contact</h2>
          <button><FiMapPin style={{ marginRight: '8px', fontSize: '20px', color: 'rgb(253, 128, 10)' }} /> No. 26, Oro Ago Street, Garki 2, Abuja, FCT Abuja</button>
          <button><FiPhone style={{ marginRight: '8px', fontSize: '20px', color: 'rgb(253, 128, 10)' }} /> +234(0)8022281616</button>
          <button><FiMail style={{ marginRight: '8px', fontSize: '20px', color: 'rgb(253, 128, 10)' }} /> info@abyunbumaoil.com</button>
        </div>
      </div>
    </div>
  </div>
  <div style={{ width: '100%', maxWidth: "900px", justifySelf: 'center', marginTop: "50px" }}>
    <hr />
    <p className="website__right">
      <FaRegCopyright style={{ marginRight: '6px', verticalAlign: 'middle' }} />
      2015 - 2025 Abyum-Boma Oil Limited. All rights reserved.
    </p>
    <p className="website__right1">
      Empowering & Leading Energy and
      Logistics in Nigeria with Precision, Compliance, and unto Global Expertise.
    </p>
  </div>
</div>

  )
}

export default Footer
