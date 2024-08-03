import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import MouseGlow from './components/MouseGlow';
import { GoProjectSymlink } from 'react-icons/go';

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
  </>
);

export default App;
