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

const Projects = () => (
  <Section id="projects">
    <Title>Projects</Title>


    <Project>
      <ProjectDetails>
        <ProjectContentWrapper>
          <ProjectImageWrapper>
            <ProjectImage src={require('../img/sales.png')} alt="Technology Athletics Website" />
          </ProjectImageWrapper>
          <ProjectContent>
            <ProjectTitle>Sales Website Model</ProjectTitle>
            <ProjectDescription>
            This project was developed to enhance my skills in ReactJS and NodeJS while creating a functional template for future e-commerce projects.
            The website includes an admin panel for managing products, sales, and users. It was designed to be responsive, user-friendly, and adaptable to different types of products.
            Since my initial expertise was focused on Front-End development, I had to learn NodeJS to build the back-end, connect to the database, and develop the admin panel.
            </ProjectDescription>
            <Skills>
              <Skill>ReactJS</Skill>
              <Skill>Styled Components</Skill>
              <Skill>JavaScript</Skill>
              <Skill>NodeJS</Skill>
              <Skill>AdminJS</Skill>
              <Skill>HTML5</Skill>
              <Skill>CSS3</Skill>
              <Skill>Figma</Skill>
            </Skills>
            <ProjectLink href="https://github.com/vLecaBR/sales-website-model" target="_blank" rel="noopener noreferrer">View Front-end View Repository</ProjectLink>
            <ProjectLink href="https://github.com/vLecaBR/sales-website-model-backend" target="_blank" rel="noopener noreferrer">View Back-end View Repository</ProjectLink>
          </ProjectContent>
        </ProjectContentWrapper>
      </ProjectDetails>
    </Project>

    <Project>
      <ProjectDetails>
        <ProjectContentWrapper>
          <ProjectImageWrapper>
            <ProjectImage src={require('../img/djfranzoni.png')} alt="djfran" />
          </ProjectImageWrapper>
          <ProjectContent>
            <ProjectTitle>DJ Franzoni</ProjectTitle>
            <ProjectDescription>
              I did this project for my friend, who is a DJ. She wanted a website to showcase her work and
              provide a platform for people to book her for events. The website is designed to be simple and easy to navigate, with a focus on her music and services.
              The project was a great opportunity for me to practice my skills in React, as well as to learn more about web design and user experience.
              I also had the chance to work with Figma to create a design that met my friend's needs and preferences.
            </ProjectDescription>
            <Skills>
              <Skill>React</Skill>
              <Skill>Styled Components</Skill>
              <Skill>Framer Motion</Skill>
              <Skill>JavaScript</Skill>
              <Skill>HTML5</Skill>
              <Skill>CSS3</Skill>
              <Skill>Git and Github</Skill>
              <Skill>Figma</Skill>
            </Skills>
            <ProjectLink href="https://djfranzoni-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</ProjectLink>
            <ProjectLink href="https://github.com/vLecaBR/djfranzoni-portfolio" target="_blank" rel="noopener noreferrer">View Repository</ProjectLink>

          </ProjectContent>
        </ProjectContentWrapper>
      </ProjectDetails>
    </Project>


    <Project>
      <ProjectDetails>
        <ProjectContentWrapper>
          <ProjectImageWrapper>
            <ProjectImage src={require('../img/sitetec.png')} alt="Technology Athletics Website" />
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
              <Skill>JavaScript</Skill>
              <Skill>Python</Skill>
              <Skill>Django</Skill>
              <Skill>Jazzmin</Skill>
              <Skill>HTML5</Skill>
              <Skill>CSS3</Skill>
              <Skill>Figma</Skill>
            </Skills>
            <ProjectLink href="https://github.com/Lu4head/Site_Tec_Barao" target="_blank" rel="noopener noreferrer">View Repository</ProjectLink>
          </ProjectContent>
        </ProjectContentWrapper>
      </ProjectDetails>
    </Project>


    <Project>
      <ProjectDetails>
        <ProjectContentWrapper>
          <ProjectImageWrapper>
            <ProjectImage src={require('../img/LinkHub.png')} alt="Link Hub" />
          </ProjectImageWrapper>
          <ProjectContent>
            <ProjectTitle>Link Hub</ProjectTitle>
            <ProjectDescription>
              I did this project alone, with the intention of offering a free service to people 
              who cannot afford it or who might prefer to invest their money in other ways for 
              their business or personal page. The project consists of a website that gathers all 
              your important links in one place with easy access. You just need the person to click 
              on the link and see, for example, your sales link, Instagram, GitHub, etc.
            </ProjectDescription>
            <Skills>
              <Skill>JavaScript</Skill>
              <Skill>HTML5</Skill>
              <Skill>CSS3</Skill>
              <Skill>Git and Github</Skill>
              <Skill>Figma</Skill>
            </Skills>
            <ProjectLink href="https://projeto-link-hub.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</ProjectLink> 
            <ProjectLink href="https://github.com/vLecaBR/Projeto-Link-Hub" target="_blank" rel="noopener noreferrer">View Repository</ProjectLink> 
          </ProjectContent>
        </ProjectContentWrapper>
      </ProjectDetails>
    </Project>


    <Project>
      <ProjectDetails>
        <ProjectContentWrapper>
          <ProjectImageWrapper>
            <ProjectImage src={require('../img/teammanager.png')} alt="Team Manager Screen" />
          </ProjectImageWrapper>
          <ProjectContent>
            <ProjectTitle>Team Manager Screen</ProjectTitle>
            <ProjectDescription>
              This project was created for learning purposes. It was my first project with React. 
              Along with the lessons from a course, I built a team manager where you can predefine 
              employees and their teams in the code, or you can create a new card. It’s also possible 
              to create new teams. It's fully flexible and is meant only to display who your team is 
              and what it looks like.
            </ProjectDescription>
            <Skills>
              <Skill>ReactJS</Skill>
              <Skill>JavaScript</Skill>
              <Skill>HTML5</Skill>
              <Skill>CSS3</Skill>
              <Skill>Git and Github</Skill>
              <Skill>Figma</Skill>
            </Skills>
            <ProjectLink href="https://github.com/vLecaBR/first-react-project" target="_blank" rel="noopener noreferrer">View Repository</ProjectLink>
          </ProjectContent>
        </ProjectContentWrapper>
      </ProjectDetails>
    </Project>
  </Section>
);

export default Projects;
