import React from 'react';
import styled from 'styled-components';

const Work = () => (
  <Section id="work">
    <Title>Work</Title>
    <Project>
      <ProjectDetails>
        <ProjectContentWrapper>
          <ProjectImageWrapper>
            <ProjectImage src="https://github.com/vLecaBR.png" alt="Projeto de Tecnologia para Atletismo" />
          </ProjectImageWrapper>
          <ProjectContent>
            <ProjectTitle>Technology Athletics Website</ProjectTitle>
            <ProjectDescription>
              This project was done in college in collaboration with two other developers,
              where I was responsible for the front end. The website was created out of a need
              for the athletics department to improve the sale of kits for new students. Previously,
              sales were conducted through Google Forms and WhatsApp. The website aimed to provide greater
              efficiency and better control over the sales process.
            </ProjectDescription>
            <Skills>
              <Skill>React</Skill>
              <Skill>HTML</Skill>
              <Skill>CSS</Skill>
              <Skill>JavaScript</Skill>
            </Skills>
            <ProjectLink href="#" target="_blank" rel="noopener noreferrer">View Project</ProjectLink>
          </ProjectContent>
        </ProjectContentWrapper>
      </ProjectDetails>
    </Project>
    {/* Adicione outros projetos aqui */}
  </Section>
);

const Section = styled.section`
  padding: 80px 20px;
  background-color: #0a192f;
  color: #ccd6f6;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Project = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  text-align: left;
`;

const ProjectDetails = styled.div`
  background-color: #112240;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 700px;
`;

const ProjectContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ProjectImageWrapper = styled.div`
  width: 40%;
  height: auto;
  margin-right: 20px;
  overflow: hidden;
  border-radius: 8px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3em;
  margin-bottom: 10px;
  color: #ccd6f6;
`;

const ProjectDescription = styled.p`
  font-size: 0.9em;
  line-height: 1.4;
  color: #8892b0;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const Skill = styled.span`
  background-color: #112240;
  border: 1px solid #64ffda;
  border-radius: 4px;
  padding: 5px 10px;
  margin: 5px;
  font-size: 0.8em;
  color: #64ffda;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  border: 1px solid #64ffda;
  border-radius: 4px;
  text-decoration: none;
  color: #64ffda;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #64ffda;
    color: #0a192f;
  }
`;

export default Work;
