import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import MainPage from './Mainpage/Main'
import PetServices from './Pet-Services/Services';
import PetEssentials from './Pet-Essentials/Essentials';
import PetHealth from './Pet-Health/Health';
import AboutUs from './About-Us/About';
import Join from './Join/Join';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/Pet-Services" element={<PetServices />} />
        <Route path="/pet-essentials" element={<PetEssentials />} />
        <Route path="/pet-health" element={<PetHealth />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
