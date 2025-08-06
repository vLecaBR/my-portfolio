import React, { memo } from 'react';
import { Section, Title, Text } from './About.styles';
import { useLanguage } from '../../context/LanguageContext';

const TEXTS = {
  en: {
    title: 'About Me',
    content: `I'm a Computer Science student with 4 years of experience in multinational companies. 
      I began my professional journey in 2021 focusing on technical support and infrastructure, 
      but I currently work in development, with a strong emphasis on automation and web development. 
      I’m responsible for building websites using technologies like ReactJS and Tailwind CSS and in the backend 
      i use NodeJS. I also develop applications, automation flows, lists, and libraries using the Power Platform 
      such as Power Apps, Power Automate, and Office 365 tools and manage SharePoint pages and workflows. 
      I'm passionate about technology and software development, especially in the web environment. 
      I'm constantly learning and improving my development skills. I'm known for being fast, a quick and 
      consistent learner, always motivated to overcome obstacles and embrace new challenges.`,
  },
  pt: {
    title: 'Sobre Mim',
    content: `Sou estudante de Ciência da Computação com 4 anos de experiência em empresas multinacionais. 
      Iniciei minha jornada profissional em 2021 focando em suporte técnico e infraestrutura, 
      mas atualmente trabalho com desenvolvimento, com forte ênfase em automação e desenvolvimento web. 
      Sou responsável por construir sites usando tecnologias como ReactJS e Tailwind CSS e no backend uso NodeJS. 
      Também desenvolvo aplicações, fluxos de automação, listas e bibliotecas usando a Power Platform, 
      como Power Apps, Power Automate e ferramentas Office 365, além de gerenciar páginas e fluxos de trabalho no SharePoint. 
      Sou apaixonado por tecnologia e desenvolvimento de software, especialmente no ambiente web. 
      Estou sempre aprendendo e melhorando minhas habilidades de desenvolvimento. Sou conhecido por ser rápido, 
      um aprendiz consistente e ágil, sempre motivado para superar obstáculos e abraçar novos desafios.`,
  },
};

const About = () => {
  const { lang } = useLanguage();
  const text = TEXTS[lang];

  return (
    <Section id="about">
      <Title>{text.title}</Title>
      <Text>{text.content}</Text>
    </Section>
  );
};

export default memo(About);
