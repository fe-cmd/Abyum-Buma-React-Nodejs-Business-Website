import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import aba from '../Components/Assets/aba.png';




const Navbar = () => {

  
    const [activeLink, setActiveLink] = useState('home'); // Track the active link
    const [activeDropdown, setActiveDropdown] = useState(''); // Track active dropdown link
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
     const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleLinkClick = (link) => {
      setActiveLink(link); // Set the clicked link as active
      setActiveDropdown(''); // Reset active dropdown on main link click
  
    };
  
    const handleDropdownClick = (dropdownLink) => {
      setActiveDropdown(dropdownLink); // Set active dropdown link
    };

  return (
    <div className="navbar">
        <div className="logo-section">
          <div className="logo-circle">
            <img src={aba} alt='' className="logo-image"/>
          </div>
          <span className="logo-text">ABYUN-BUMA OIL</span>
        </div>

        <div className="hamburger" onClick={toggleMobileMenu}>
    {mobileMenuOpen ? "✕" : "☰"}
  </div>

  <ul className={`menu ${mobileMenuOpen ? "open" : ""}`}>
  <Link to="/" style={{ textDecoration: "none" }}>
    <li
      onClick={() => handleLinkClick('home')}
      className={activeLink === 'home' ? 'active' : ''}
    >
      HOME
    </li>
  </Link>

  <Link to="/about" style={{ textDecoration: "none" }}>
    <li className="has-dropdown">
      WHO WE ARE
      <div className="dropdown">
        <Link to="/mission_vision" style={{ textDecoration: "none" }}>
          <button
            onClick={() => handleDropdownClick('our-mission')}
            className={activeDropdown === 'our-history' ? 'active' : ''}
          >
            Our Mission
          </button>
        </Link>
        <Link to="/mission_vision" style={{ textDecoration: "none" }}>
          <button
            onClick={() => handleDropdownClick('our-vision')}
            className={activeDropdown === 'leadership' ? 'active' : ''}
          >
            Our Vision
          </button>
        </Link>
        <Link to="/mission_vision" style={{ textDecoration: "none" }}>
          <button
            onClick={() => handleDropdownClick('core-values')}
            className={activeDropdown === 'leadership' ? 'active' : ''}
          >
            Core Values
          </button>
        </Link>
        <Link to="/teams_expertise" style={{ textDecoration: "none" }}>
          <button
            onClick={() => handleDropdownClick('core-values')}
            className={activeDropdown === 'leadership' ? 'active' : ''}
          >
            Teams Expertise
          </button>
        </Link>
      </div>
    </li>
  </Link>

  <Link to="/what_we_do" style={{ textDecoration: "none" }}>
    <li className="has-dropdown">
      OPERATIONS
      <div className="dropdown">
        <Link to="/primary_services" style={{ textDecoration: "none" }}>
          <button
            onClick={() => handleDropdownClick('offshore-assets')}
            className={activeDropdown === 'offshore-assets' ? 'active' : ''}
          >
            Upstream
          </button>
        </Link>
        <Link to="/primary_services" style={{ textDecoration: "none" }}>
          <button
            onClick={() => handleDropdownClick('offshore-assets')}
            className={activeDropdown === 'offshore-assets' ? 'active' : ''}
          >
            Downstream
          </button>
        </Link>
        <Link to="/primary_services" style={{ textDecoration: "none" }}>
          <button
            onClick={() => handleDropdownClick('production')}
            className={activeDropdown === 'production' ? 'active' : ''}
          >
            Exploration & Production
          </button>
        </Link>
        <Link to="/system_services" style={{ textDecoration: "none" }}>
          <button
            onClick={() => handleDropdownClick('production')}
            className={activeDropdown === 'production' ? 'active' : ''}
          >
            System Maintenance & Services
          </button>
        </Link>
      </div>
    </li>
  </Link>

  <Link to="/equipments_tools" style={{ textDecoration: "none" }}>
    <li
      onClick={() => handleLinkClick('csr')}
      className={activeLink === 'csr' ? 'active' : ''}
    >
      EQUIPMENTS
    </li>
  </Link>

  <Link to="/official_statements" style={{ textDecoration: "none" }}>
    <li
      onClick={() => handleLinkClick('media')}
      className={activeLink === 'media' ? 'active' : ''}
    >
      OFFICIAL STATEMENTS
    </li>
  </Link>

  <Link to="/company_contacts" style={{ textDecoration: "none" }}>
    <li
      onClick={() => handleLinkClick('contact')}
      className={activeLink === 'contact' ? 'active' : ''}
    >
      CONTACT US
    </li>
  </Link>
</ul>

      </div>
  )
}

export default Navbar
