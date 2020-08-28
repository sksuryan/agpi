import React from 'react';
import Nav from './components/Nav';
import './App.css';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <Nav />
      <HeroSection />
      <About />
      <Events />
    </div>
  );
}

export default App;
