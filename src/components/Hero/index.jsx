import React, { memo } from 'react';
import {
  Section,
  Intro,
  Name,
  Subtitle,
  Description,
  Button,
  Skills,
  Skill,
} from './Hero.styles';
import { useLanguage } from '../../context/LanguageContext';

const TEXTS = {
  en: {
    intro: "Hi, I'm",
    subtitle: 'FullStack Developer.',
    description:
      'A young computer science student focused on web development, with professional experience and 4 years in multinationals companies. Quick to learn and adept at working with the latest web technologies, such as ReactJS, NextJS, VueJS, React Native, JavaScript, HTML5, CSS3, NodeJS, SASS, Figma, Svelte, Python, and more. Always eager to learn more.',
    button: 'Check out my Linkedin',
    buttonAria: 'Open Victor Leça LinkedIn profile',
  },
  pt: {
    intro: 'Olá, eu sou o',
    subtitle: 'Desenvolvedor FullStack.',
    description:
      'Estudante de Ciência da Computação focado em desenvolvimento web, com experiência profissional e 4 anos atuando em empresas multinacionais. Aprendo rápido e sou habilidoso no uso das tecnologias web mais recentes, como ReactJS, NextJS, VueJS, React Native, JavaScript, HTML5, CSS3, NodeJS, SASS, Figma, Svelte, Python, entre outras.',
    button: 'Veja meu Linkedin',
    buttonAria: 'Abrir perfil do LinkedIn do Victor Leça',
  },
};

const SKILLS = [
  'ReactJS',
  'NextJS',
  'VueJS',
  'React Native',
  'JavaScript',
  'TypeScript',
  'NodeJS',
  'HTML',
  'CSS',
  'Java',
  'Figma',
  'BootStrap',
  'Sass',
  'Tailwind CSS',
];

const Hero = () => {
  const { lang } = useLanguage();
  const text = TEXTS[lang];

  return (
    <Section>
      <Intro>{text.intro}</Intro>
      <Name>Victor Leça.</Name>
      <Subtitle>{text.subtitle}</Subtitle>
      <Description>{text.description}</Description>
      <Skills>
        {SKILLS.map((skill) => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </Skills>
      <Button
        href="https://www.linkedin.com/in/victor-leca-vlkbr/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={text.buttonAria}
      >
        {text.button}
      </Button>
    </Section>
  );
};

export default memo(Hero);
