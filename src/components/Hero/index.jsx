import React from 'react';
import { 
  Section,
  Intro,
  Name,
  Subtitle,
  Description,
  Button 
} from './Hero.styles';

const Hero = () => (
  <Section>
    <Intro>Hi, my name is</Intro>
    <Name>Victor Leça.</Name>
    <Subtitle>I build things for the web.</Subtitle>
    <Description>
      A young computer science student focused on web development, with professional experience and 4 years in multinationals companies. <br></br>
      Quick to learn and adept at working with the latest web technologies, such as React.JS, HTML5, CSS3, SASS, Figma, Svelte, Python, and more. <br></br>
      Always eager to learn more.
    </Description>
    <Button href="https://www.linkedin.com/in/victor-leca-vlkbr/" target="_blank">Check out my Linkedin</Button>
  </Section>
);


export default Hero;
