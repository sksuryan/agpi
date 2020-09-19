import React from 'react';
import Nav from './components/Nav';
import './App.css';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <HeroSection />
      <About />
      <Events />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
