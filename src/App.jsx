import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import About from './pages/About';
// import Programs from './pages/Programs';
// import Admissions from './pages/Admissions';
// import Parents from './pages/Parents';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/programs" element={<Programs />} /> */}
        {/* <Route path="/admissions" element={<Admissions />} /> */}
        {/* <Route path="/parents" element={<Parents />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;