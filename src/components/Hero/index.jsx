import React from 'react';
import { Section, Intro, Name, Subtitle, Description, Button, Skills, Skill } from './Hero.styles';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const { lang } = useLanguage();

  const text = {
    en: {
      intro: "Hi, I'm",
      subtitle: "FullStack Developer.",
      description: "A young computer science student focused on web development, with professional experience and 4 years in multinationals companies. Quick to learn and adept at working with the latest web technologies, such as ReactJS, NextJS, VueJS, React Native, JavaScript, HTML5, CSS3, NodeJS, SASS, Figma, Svelte, Python, and more. Always eager to learn more.",
      button: "Check out my Linkedin"
    },
    pt: {
      intro: "Olá, eu sou o",
      subtitle: "Desenvolvedor FullStack.",
      description: "Estudante de Ciência da Computação focado em desenvolvimento web, com experiência profissional e 4 anos atuando em empresas multinacionais. Aprendo rápido e sou habilidoso no uso das tecnologias web mais recentes, como ReactJS, NextJS, VueJS, React Native, JavaScript, HTML5, CSS3, NodeJS, SASS, Figma, Svelte, Python, entre outras.",
      button: "Veja meu Linkedin"
    }
  };

  return (
    <Section>
      <Intro>{text[lang].intro}</Intro>
      <Name>Victor Leça.</Name>
      <Subtitle>{text[lang].subtitle}</Subtitle>
      <Description>{text[lang].description}</Description>
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
                  </Skills>
      <Button href="https://www.linkedin.com/in/victor-leca-vlkbr/" target="_blank">
        {text[lang].button}
      </Button>
    </Section>
  );
};

export default Hero;
