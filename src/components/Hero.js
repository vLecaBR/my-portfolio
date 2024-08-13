import React from 'react';
import styled from 'styled-components';

const Hero = () => (
  <Section>
    <Intro>Hi, my name is</Intro>
    <Name>Victor Leça.</Name>
    <Subtitle>I build things for the web.</Subtitle>
    <Description>
      A young computer science student focused on web development, with professional experience primarily in technical support. <br></br>
      Currently seeking experience in the web development field. <br></br>
      Quick to learn and adept at working with the latest web technologies, such as React.JS, HTML5, CSS3, SASS, Figma, Svelte, Python, and more. <br></br>
      Always eager to learn more.
    </Description>
    <Button href="https://www.linkedin.com/in/victor-leca-vlkbr/" target="_blank">Check out my Linkedin</Button>
  </Section>
);

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  padding: 0 100px;
  background-color: #0a192f;
  color: #ccd6f6;

  @media (max-width: 768px) {
    padding: 0 50px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

const Intro = styled.h1`
  color: #64ffda;

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const Name = styled.h2`
  font-size: 3.5em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 3em;
  }

  @media (max-width: 480px) {
    font-size: 2.5em;
  }
`;

const Subtitle = styled.h3`
  font-size: 2.5em;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.75em;
  }
`;

const Description = styled.p`
  max-width: 540px;
  line-height: 1.5;
  margin: 20px 0;

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const Button = styled.a`
  padding: 15px 20px;
  background-color: transparent;
  border: 1px solid #64ffda;
  border-radius: 4px;
  color: #64ffda;
  text-decoration: none;

  @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 0.9em;
  }
`;

export default Hero;
