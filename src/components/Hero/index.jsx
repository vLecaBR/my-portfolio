import React from 'react';
import { 
  Section,
  Intro,
  Name,
  Subtitle,
  Description,
  Button, 
  Skills,
  Skill
} from './Hero.styles';

const Hero = () => (
  <Section>
    <Intro>Hi, I'm</Intro>
    <Name>Victor Leça.</Name>
    <Subtitle>I build things for the web.</Subtitle>
    <Description>
      A young computer science student focused on web development, with professional experience and 4 years in multinationals companies. <br></br>
      Quick to learn and adept at working with the latest web technologies, such as ReactJS, NextJS, VueJS, React Native, JavaScript, HTML5, CSS3, NodeJS, SASS, Figma, Svelte, Python, and more. <br></br>
      Always eager to learn more.
    </Description>

                <Skills>
                  <Skill>ReactJS</Skill>
                  <Skill>NextJS</Skill>
                  <Skill>VueJS</Skill>
                  <Skill>React Native</Skill>
                  <Skill>JavaScript</Skill>
                  <Skill>TypeScript</Skill>
                  <Skill>NodeJS</Skill>
                  <Skill>HTML</Skill>
                  <Skill>CSS</Skill>
                  <Skill>Java</Skill>
                  <Skill>Figma</Skill>
                  <Skill>BootStrap</Skill>
                  <Skill>Sass</Skill>
                  <Skill>Tailwind CSS</Skill>
                  </Skills><br></br>

    <Button href="https://www.linkedin.com/in/victor-leca-vlkbr/" target="_blank">Check out my Linkedin</Button>
  </Section>
);


export default Hero;
