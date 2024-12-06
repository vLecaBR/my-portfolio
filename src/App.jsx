import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact/Contact';
import Sidebar from './components/Sidebar';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => (
  <>
    <Header />
    <Hero id="home" />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Sidebar />
    <Analytics id="YVXQVZQ6Q3" />
    <SpeedInsights />
  </>
);

export default App;
