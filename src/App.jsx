import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from './pages/AboutUs';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  

  return (
  
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
   
  )
}

export default App
