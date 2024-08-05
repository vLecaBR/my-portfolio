import React from 'react';
import styled from 'styled-components';

const About = () => (
  <Section id="about">
    <Title>About Me</Title>
    <Text>
    I am a Computer Science student with 3 years of experience in multinational companies, 
    focusing on technical support and infrastructure since 2021. I have a strong passion for 
    technology and development, particularly in the field of web development.
    I have skills in JavaScript, HTML, CSS, ReactJS, Svelte Figma, Python, and C++.
    Additionally, I am actively learning and enhancing my knowledge in popular frameworks and 
    libraries such as Angular and ReactJS.
    I am known for being agile, a quick and consistent learner. I am always motivated to overcome
     obstacles and embrace new challenges.
    </Text>
  </Section>
);

const Section = styled.section`
  padding: 100px 0;
  background-color: #0a192f;
  color: #ccd6f6;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Text = styled.p`
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
`;

export default About;
