import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Mission from './Pages/Mission';
import Operations from './Pages/Operations';
import Teams from './Pages/Teams';
import Sysm from './Pages/Sysm';
import Primary from './Pages/Primary';
import Equipments from './Pages/Equipments';
import Statements from './Pages/Statements';
import Contact from './Pages/Contact';
import Progress from './Pages/Progress';
import ScrollToTopButton from './Pages/ScrollToTopButton';
import Preloader from './Pages/Preloader';





function App() {
  return (
    <div>
      <BrowserRouter>
      <Preloader /> {/* Show gear/cog spinner before loading each route */}

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/mission_vision" element={<Mission />} />
      <Route path="/what_we_do" element={<Operations />} />
      <Route path="/teams_expertise" element={<Teams />} />
      <Route path="/system_services" element={<Sysm />} />
      <Route path="/primary_services" element={<Primary />} />
      <Route path="/equipments_tools" element={<Equipments />} />
      <Route path="/official_statements" element={<Statements />} />
      <Route path="/company_contacts" element={<Contact />} />
      <Route path="/operation_progress" element={<Progress />} />






      </Routes>
      <ScrollToTopButton /> {/* Appears on every page after 40% scroll */}

      </BrowserRouter>

    </div>
  );
}

export default App;
