import React from 'react';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Offer from './Components/Offer/Offer';
import Footer from './Components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
        <Nav />
        <Home />
        <About />
        <Offer />
        <Footer />
    </div>
  );
}

export default App;
