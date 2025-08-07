import React from 'react';
import {
  Section,
  Title,
  Project,
  ProjectDetails,
  ProjectContentWrapper,
  ProjectImageWrapper,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  Skills,
  Skill,
  ProjectLink
} from './Projects.styles';
import { useLanguage } from '../../context/LanguageContext';

const Projects = () => {
  const { lang } = useLanguage();

  const text = {
    en: {
      title: "Projects",
      projects: [
        {
          img: require('../img/sales.png'),
          alt: "Sales Website Model",
          title: "Sales Website Model",
          description: `This project was developed to enhance my skills in ReactJS and NodeJS while creating a functional template for future e-commerce projects.
          The website includes an admin panel for managing products, sales, and users. It was designed to be responsive, user-friendly, and adaptable to different types of products.
          Since my initial expertise was focused on Front-End development, I had to learn NodeJS to build the back-end, connect to the database, and develop the admin panel.`,
          skills: ["ReactJS", "Styled Components", "JavaScript", "NodeJS", "AdminJS", "HTML5", "CSS3", "Figma"],
          links: [
            { href: "https://github.com/vLecaBR/sales-website-model", label: "View Front-end Repository" },
            { href: "https://github.com/vLecaBR/sales-website-model-backend", label: "View Back-end Repository" }
          ]
        },
        {
          img: require('../img/djfranzoni.png'),
          alt: "DJ Franzoni",
          title: "DJ Franzoni",
          description: `I did this project for my friend, who is a DJ. She wanted a website to showcase her work and
          provide a platform for people to book her for events. The website is designed to be simple and easy to navigate, with a focus on her music and services.
          The project was a great opportunity for me to practice my skills in React, as well as to learn more about web design and user experience.
          I also had the chance to work with Figma to create a design that met my friend's needs and preferences.`,
          skills: ["React", "Styled Components", "Framer Motion", "JavaScript", "HTML5", "CSS3", "Git and Github", "Figma"],
          links: [
            { href: "https://djfranzoni-portfolio.vercel.app/", label: "View Project" },
            { href: "https://github.com/vLecaBR/djfranzoni-portfolio", label: "View Repository" }
          ]
        },
        {
          img: require('../img/sitetec.png'),
          alt: "Technology Athletics Website",
          title: "Technology Athletics Website",
          description: `This project was done in college in collaboration with two other developers,
          where I was responsible for the front end. The website was created out of a need
          for the athletics department to improve the sale of kits for new students. Previously,
          sales were conducted through Google Forms and WhatsApp. The website aimed to provide greater
          efficiency and better control over the sales process.`,
          skills: ["JavaScript", "Python", "Django", "Jazzmin", "HTML5", "CSS3", "Figma"],
          links: [
            { href: "https://github.com/Lu4head/Site_Tec_Barao", label: "View Repository" }
          ]
        },
        {
          img: require('../img/LinkHub.png'),
          alt: "Link Hub",
          title: "Link Hub",
          description: `I did this project alone, with the intention of offering a free service to people 
          who cannot afford it or who might prefer to invest their money in other ways for 
          their business or personal page. The project consists of a website that gathers all 
          your important links in one place with easy access. You just need the person to click 
          on the link and see, for example, your sales link, Instagram, GitHub, etc.`,
          skills: ["JavaScript", "HTML5", "CSS3", "Git and Github", "Figma"],
          links: [
            { href: "https://projeto-link-hub.vercel.app/", label: "View Project" },
            { href: "https://github.com/vLecaBR/Projeto-Link-Hub", label: "View Repository" }
          ]
        },
      ],
    },
    pt: {
      title: "Projetos",
      projects: [
        {
          img: require('../img/sales.png'),
          alt: "Sales Website Model",
          title: "Website de Vendas Modelo",
          description: `Esse projeto foi desenvolvido para aprimorar minhas habilidades em ReactJS e NodeJS enquanto criava um template funcional para futuros projetos de e-commerce.
          O site inclui um painel administrativo para gerenciar produtos, vendas e usuários. Foi projetado para ser responsivo, amigável e adaptável a diferentes tipos de produtos.
          Como minha expertise inicial era focada em Front-End, tive que aprender NodeJS para construir o back-end, conectar ao banco de dados e desenvolver o painel administrativo.`,
          skills: ["ReactJS", "Styled Components", "JavaScript", "NodeJS", "AdminJS", "HTML5", "CSS3", "Figma"],
          links: [
            { href: "https://github.com/vLecaBR/sales-website-model", label: "Ver Repositório Front-end" },
            { href: "https://github.com/vLecaBR/sales-website-model-backend", label: "Ver Repositório Back-end" }
          ]
        },
        {
          img: require('../img/djfranzoni.png'),
          alt: "DJ Franzoni",
          title: "DJ Franzoni",
          description: `Fiz esse projeto para minha amiga, que é DJ. Ela queria um site para mostrar seu trabalho e
          oferecer uma plataforma para pessoas a contratarem para eventos. O site foi feito para ser simples e fácil de navegar, com foco na música e serviços dela.
          O projeto foi uma ótima oportunidade para praticar minhas habilidades em React, além de aprender mais sobre design web e experiência do usuário.
          Também trabalhei com Figma para criar um design que atendesse às necessidades e preferências da minha amiga.`,
          skills: ["React", "Styled Components", "Framer Motion", "JavaScript", "HTML5", "CSS3", "Git and Github", "Figma"],
          links: [
            { href: "https://djfranzoni-portfolio.vercel.app/", label: "Ver Projeto" },
            { href: "https://github.com/vLecaBR/djfranzoni-portfolio", label: "Ver Repositório" }
          ]
        },
        {
          img: require('../img/sitetec.png'),
          alt: "Technology Athletics Website",
          title: "Site Atlética de Tecnologia",
          description: `Esse projeto foi feito na faculdade em colaboração com outros dois devs,
          onde eu fiquei responsável pelo front end. O site foi criado a partir da necessidade
          da atlética onde eu era presidente, para melhorar a venda de kits para calouros. Antes,
          as vendas eram feitas via Google Forms e WhatsApp. O site tinha como objetivo oferecer maior
          eficiência e melhor controle sobre o processo de vendas.`,
          skills: ["JavaScript", "Python", "Django", "Jazzmin", "HTML5", "CSS3", "Figma"],
          links: [
            { href: "https://github.com/Lu4head/Site_Tec_Barao", label: "Ver Repositório" }
          ]
        },
        {
          img: require('../img/LinkHub.png'),
          alt: "Link Hub",
          title: "Link Hub",
          description: `Fiz esse projeto sozinho, com a intenção de oferecer um serviço gratuito para pessoas
          que não podem pagar ou que preferem investir seu dinheiro de outras formas para
          seu negócio ou página pessoal. O projeto consiste em um site que reúne todos
          os seus links importantes em um só lugar com fácil acesso. Basta a pessoa clicar
          no link e ver, por exemplo, seu link de vendas, Instagram, GitHub, etc.`,
          skills: ["JavaScript", "HTML5", "CSS3", "Git and Github", "Figma"],
          links: [
            { href: "https://projeto-link-hub.vercel.app/", label: "Ver Projeto" },
            { href: "https://github.com/vLecaBR/Projeto-Link-Hub", label: "Ver Repositório" }
          ]
        },
      ],
    },
  };

  return (
    <Section id="projects">
      <Title>{text[lang].title}</Title>

      {text[lang].projects.map(({ img, alt, title, description, skills, links }, idx) => (
        <Project key={idx}>
          <ProjectDetails>
            <ProjectContentWrapper>
              <ProjectImageWrapper>
                <ProjectImage src={img} alt={alt} />
              </ProjectImageWrapper>
              <ProjectContent>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{description}</ProjectDescription>
                <Skills>
                  {skills.map((skill, i) => (
                    <Skill key={i}>{skill}</Skill>
                  ))}
                </Skills>
                {links.map(({ href, label }, i) => (
                  <ProjectLink key={i} href={href} target="_blank" rel="noopener noreferrer">
                    {label}
                  </ProjectLink>
                ))}
              </ProjectContent>
            </ProjectContentWrapper>
          </ProjectDetails>
        </Project>
      ))}
    </Section>
  );
};

export default Projects;
