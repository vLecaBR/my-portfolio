import React from 'react';
import styled from 'styled-components';

const Hero = () => (
  <Section>
    <Intro>Hi, my name is</Intro>
    <Name>Victor Leça.</Name>
    <Subtitle>I build things for the web.</Subtitle>
    <Description>
    I am a Computer Science student with 3 years of experience in multinational companies, focusing on technical support and infrastructure since 2021. I have a strong passion for technology and development, particularly in the field of web development.
I have skills in JavaScript, HTML, CSS, ReactJS, Svelte Figma, Python, and C++.
Additionally, I am actively learning and enhancing my knowledge in popular frameworks and libraries such as Angular and ReactJS.
I am known for being agile, a quick and consistent learner. I am always motivated to overcome obstacles and embrace new challenges.
    </Description>
    <Button href="https://www.linkedin.com/in/victor-leca-vlkbr/">Check out my Linkedin</Button>
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
`;

const Intro = styled.h1`
  color: #64ffda;
`;

const Name = styled.h2`
  font-size: 3.5em;
  margin: 0;
`;

const Subtitle = styled.h3`
  font-size: 2.5em;
  margin: 10px 0;
`;

const Description = styled.p`
  max-width: 540px;
  line-height: 1.5;
  margin: 20px 0;
`;

const Button = styled.a`
  padding: 15px 20px;
  background-color: transparent;
  border: 1px solid #64ffda;
  border-radius: 4px;
  color: #64ffda;
  text-decoration: none;
`;

export default Hero;
