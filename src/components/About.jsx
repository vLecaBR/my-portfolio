import React from 'react';
import styled from 'styled-components';

const About = () => (
  <Section id="about">
    <Title>About Me</Title>
    <Text>
    I am a Computer Science student with 3 years of experience in multinational companies, focusing on technical support and infrastructure since 2021. Currently, I work directly with programming in the automation sector, where I am responsible for creating websites using ReactJS, Tailwind CSS, and other technologies. I also develop applications, automation flows, lists, and libraries through the Power Platform, utilizing technologies such as Power Apps, Power Automate, and Office 365 tools, as well as managing SharePoint flows and pages.
    I have a strong passion for technology and development, especially in the area of web development. I possess skills in JavaScript, HTML, CSS, ReactJS, Svelte, Figma and Python.
    Additionally, I am actively learning and expanding my knowledge in popular frameworks and libraries like Angular and ReactJS.
    I am known for being quick, a fast and consistent learner, always motivated to overcome obstacles and embrace new challenges.
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
