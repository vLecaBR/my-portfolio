import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import MouseGlow from './components/MouseGlow';
import { Analytics } from "@vercel/analytics/react"

const App = () => (
  <>
    <MouseGlow />
    <Header />
    <Hero id="home" />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Sidebar />
    <Analytics id="YVXQVZQ6Q3" />
  </>
);

export default App;
