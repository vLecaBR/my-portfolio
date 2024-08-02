import React from 'react';
import styled from 'styled-components';

const Work = () => (
  <Section id="work">
    <Title>Work</Title>
    <Project>
      <ProjectTitle>Technology Athletics Website</ProjectTitle>
      <ProjectDescription>
      This project was done in college in collaboration with two other developers, 
      where I was responsible for the front end. The website was created out of a need 
      for the athletics department to improve the sale of kits for new students. Previously, 
      sales were conducted through Google Forms and WhatsApp. The website aimed to provide greater 
      efficiency and better control over the sales process.
      </ProjectDescription>
      <ProjectLink href="#">View Project</ProjectLink>
    </Project>
    {/* Adicione outros projetos aqui */}
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

const Project = styled.div`
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  border: 1px solid #64ffda;
  border-radius: 4px;
  text-decoration: none;
  color: #64ffda;
`;

export default Work;
