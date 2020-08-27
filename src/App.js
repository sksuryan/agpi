import React from 'react';
import Nav from './components/Nav';
import './App.css';
import HeroSection from './components/HeroSection';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <HeroSection />
      <About />
    </div>
  );
}

export default App;
