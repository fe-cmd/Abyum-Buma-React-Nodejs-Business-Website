import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import ao25 from '../Components/Assets/ao25.PNG';
import ao6 from '../Components/Assets/ao6.PNG';
import ao23 from '../Components/Assets/ao23.PNG';
import ao26 from '../Components/Assets/ao26.PNG';
import ao27 from '../Components/Assets/ao27.PNG';
import ao28 from '../Components/Assets/ao28.PNG';


const cardsData = [
    {
      img: ao25,
      title: 'key Upstream Operations',
      text: (
        <div>
          <p>ABYUN-BUMA OIL SERVICES LTD offers a comprehensive range of upstream services:</p>
          <ul>
            <li><strong>Mechanical Engineering/Construction</strong>: Includes fabrication and maintenance services.</li>
            <li><strong>Civil Engineering/Construction</strong>: Specializes in road, bridge, drainage, and building maintenance.</li>
            <li><strong>Asset Integrity Management</strong>: Focuses on pipeline services and monitoring.</li>
            <li><strong>Equipment/Tools</strong>: Provides heavy-duty equipment, including OCTGs and pipes.</li>
          </ul>
        </div>
      ),
    },
    {
      img: ao6,
      title: 'Downstream Operations',
      text:  (
        <div>
          <p>This business unit is responsible for the supply and trading of crude and petroleum products in partnership with Nigerian National/NNPC Retail and various stakeholders (Onshore and Offshore/Swamp):</p>
          <ul>
            <li><strong>Products traded include:</strong>
              <ul>
                <li>Premium Motor Spirit (PMS)</li>
                <li>Automotive Gas Oil (AGO, also known as Diesel)</li>
                <li>Dual Purpose Kerosene (ATK)</li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
    {
      img: ao23,
      title: 'Petroleum Product Haulage & Fleet Management',
      text: (
        <div>
          <ul>
            <li><strong>Transportation of Petroleum Products</strong>: Responsible for moving crude oil and refined petroleum products from storage or production sites to distribution points.</li>
            <li><strong>Fleet Management</strong>: Involves the management, maintenance, and optimization of vehicles and vessels used in transporting petroleum products.</li>
            <li><strong>Safety Standards</strong>: Ensures strict adherence to safety regulations during the transportation process to minimize accidents or spills.</li>
            <li><strong>Timely Delivery</strong>: Focuses on ensuring efficient and timely delivery of products to meet market demand and avoid delays.</li>
            <li><strong>Collaboration with Stakeholders</strong>: Works in partnership with stakeholders like the Nigerian National/NNPC and other organizations to facilitate the haulage process.</li>
          </ul>
        </div>
      ),
    },
    {
      img: ao26,
      title: 'Exploration Operations',
      text: (
        <div>
          <ul>
            <li>Nski conducts exploration, appraisal, field development, and production of offshore fields.</li>
            <li>Experts at creating teams using both ABYUN-BUMA OIL SERVICES LTD resources and external resources from partners and contractors.</li>
            <li>Builds relationships with key players to work in the most challenging environments.</li>
            <li>Strategic focus is on the acquisition of near-term assets in exploration.</li>
            <li>Portfolio of oil and gas assets in Nigeria and Sub-Sahara at varying stages of exploration, development, and production.</li>
            <li>Involvement of Government Agencies and the people where we operate, aiming to make everyone part of the solution.</li>
            <li>Focuses on field development and appraisal to maximize offshore reserves.</li>
            <li>Expertise in building robust teams with internal and external resources to drive operations.</li>
            <li>Exploration assets in Nigeria and Sub-Saharan Africa, spanning various operational stages.</li>
            <li>Strong focus on establishing and maintaining partnerships with key stakeholders for success in exploration activities.</li>
          </ul>
        </div>
      ),
    },
    {
      img: ao27,
      title: 'Production Operations',
      text: (
        <div>
          <ul>
            <li>Teams include Exploration/Development, Drilling, Production, Facilities, and Infrastructure/Installation teams.</li>
            <li>The company emphasizes technical excellence, prioritizing quality over quantity.</li>
            <li>Involvement of Government Agencies and local communities in the production process.</li>
            <li>Reliable services following safety and quality standards.</li>
            <li>Provides procurement, control & safety services, and oil and gas production facilities, including inspection and meter calibration services.</li>
            <li>Affiliated with international pipeline companies, executing projects on engineering, procurement, installation, and construction of various diameters of pipelines.</li>
            <li>One of the robust plans is to start a cylinder ownership scheme that ensures safety, accessibility to gas, and reduces switching costs for customers.</li>
            <li>Strong emphasis on production team excellence, including various specialized teams (e.g., Drilling, Production, and Facilities).</li>
            <li>Focus on acquisition of assets in upstream operations to boost production capabilities.</li>
            <li>Strategic acquisition of assets aimed at near-term productivity increases.</li>
            <li>Long-term planning to ensure sustainable and efficient production operations.</li>
          </ul>
        </div>
      ),
    },
    {
      img: ao28,
      title: 'Oil Engineering and Construction',
      text: (
        <div>
          <ul>
            <li><strong>Engineering Procurement, Installation, and Construction (EPIC)</strong>: Involved in the engineering, procurement, installation, and construction of various oil and gas infrastructure.</li>
            <li><strong>Marine Logistics and Support Services</strong>: Provides marine logistics services and support for construction projects, ensuring timely delivery and operational excellence.</li>
            <li><strong>Pipeline Construction</strong>: Expertise in the construction of pipelines for oil and gas transportation.</li>
            <li><strong>Maintenance and Inspection Services</strong>: Ensures the proper maintenance and inspection of oil and gas production facilities and infrastructure.</li>
            <li><strong>Facilities and Infrastructure Development</strong>: Involved in developing and improving oil and gas production facilities, ensuring they meet operational and safety standards.</li>
          </ul>
        </div>
      ),
    },
  ];

const Primary = () => {

 
  return (
    <>              
     <Link to="/what_we_do" style={{ textDecoration: "none" }}>
      <div className="back-arrow">
         <FiArrowLeft size={24} />
       </div></Link>
    <div className="cards-container">
          {cardsData.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.img} alt="service" className="card-image" />
              <div className="card-text">
                <h3>
                  <FaArrowRight className="arrow-icon" />
                  {card.title}
                </h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
        </>
  )
}

export default Primary
