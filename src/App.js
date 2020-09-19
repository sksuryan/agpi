import React from 'react';
import Nav from './components/Nav';
import './App.css';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Footer from './components/Footer';
import * as data from './data.json';

function App() {
  const about = data.about;
  return (
    <div className="App">
      <Nav />
      <HeroSection />
      <About about={about}/>
      <Events />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
