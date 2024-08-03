import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import MouseGlow from './components/MouseGlow';

const App = () => (
  <>
    <MouseGlow />
    <Header />
    <Hero id="home" />
    <About />
    <Experience />
    <Work />
    <Contact />
    <Sidebar />
  </>
);

export default App;
