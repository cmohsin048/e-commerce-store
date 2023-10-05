import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Aboutus from './components/Aboutus';
import Shop from './components/Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import './product.css';
import './Fonts.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/About" element={<Aboutus/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          {/* <Route path='/' element={<Shop/>}/> */}
        
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
