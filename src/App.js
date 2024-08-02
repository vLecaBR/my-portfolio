import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Header from './components/Header';

const App = () => (
  <Container>
    <Header />
    <Sidebar />
    <MainContent>
      <Hero />
      <Section id="about">
        <About />
      </Section>
      <Section id="experience">
        <Experience />
      </Section>
      <Section id="work">
        <Work />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </MainContent>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  padding-right: 80px; /* Espaço para a sidebar */
  overflow-x: hidden;
`;

const Section = styled.section`
  padding: 80px 0;
  background-color: #0a192f;
  color: #ccd6f6;
`;

export default App;
