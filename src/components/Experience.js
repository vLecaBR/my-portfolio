import React from 'react';
import styled from 'styled-components';

const Experience = () => (
  <Section id="experience">
    <Title>Experience</Title>
    <Job>
    <JobDetails>
        <JobDate>Semptember 2024 - Present</JobDate>
        <JobTitle>JR Automation Assistant - LongPing - High Tech</JobTitle>
        <JobDescription>
        I work in the creation and maintenance of automated workflows, websites, 
        lists, and libraries using Power Platform tools, SharePoint, Power Automate,
        and Power Apps, as well as web technologies such as ReactJS, among others,
        depending on user requests. I develop customized solutions that meet specific
        user needs, from simple workflows like automatic email triggers to
        complex approval processes. I also identify and apply the most suitable
        technologies for web development, ensuring efficiency and usability in 
        each project.
        </JobDescription>
        <Skills>
          <Skill>ReactJS</Skill>
          <Skill>SharePoint</Skill>
          <Skill>Power Automate</Skill>
          <Skill>Power Apps</Skill>
          <Skill>Power FX</Skill>
          <Skill>Power Platform</Skill>
          <Skill>JavaScript</Skill>
          <Skill>HTML</Skill>
          <Skill>CSS</Skill>
        </Skills>
      </JobDetails>
      </Job>
      <Job>
      <JobDetails>
        <JobDate>February 2023 - Semptember 2024</JobDate>
        <JobTitle>Helpdesk Intern - LongPing - High Tech</JobTitle>
        <JobDescription>
          Working with in-person and remote calls to correct problems such as VPN, 
          password issues, bug fixes, creating groups and user management using Active
           Directory, creating shell scripts for remote execution, reducing around 10 hours 
           of manual work monthly, network monitoring, and internal services using Zabbix and 
           Grafana, improving monitoring by 20%, maintenance of notebooks, desktops, monitors, 
           responsible for extracting and making .MSIX files available for installation, stock 
           control and dispatch of equipment, creation of websites aimed at the internal public (intranet).
        </JobDescription>
        <Skills>
          <Skill>React</Skill>
          <Skill>HTML</Skill>
          <Skill>CSS</Skill>
          <Skill>JavaScript</Skill>
          <Skill>Active Directory</Skill>
          <Skill>Windows support</Skill>
          <Skill>Zabbix</Skill>
          <Skill>Grafana</Skill>
          <Skill>VPN</Skill>
          <Skill>PowerShell</Skill>
          <Skill>SAP</Skill>
        </Skills>
      </JobDetails>
    </Job>
    <Job>
      <JobDetails>
        <JobDate>February 2021 - January 2023</JobDate>
        <JobTitle>IT / Facilities Apprentice - TMF Group</JobTitle>
        <JobDescription>
          Apprentice in 3 areas: Administrative, IT, and Facilities. IT experience includes 
          help desk support tasks, reducing service time by 30%, formatting and preparing machines
           for integration, remote support, equipment delivery and inventory control, improving IT 
           stock by 35%. In the administrative and facilities area, activities were related to the 
           GAO (General Affairs Office), office presentation, and benefits. Additionally, participated
            in general onboarding, took care of the office, and managed service notes for purchased equipment.
             Also obtained quotes for pest control and painting. For 1 and a half years, worked remotely, and 
             in the last 6 months, adopted the hybrid model.
        </JobDescription>
        <Skills>
          <Skill>Active Directory</Skill>
          <Skill>Windows support</Skill>
          <Skill>VPN</Skill>
          <Skill>PowerShell</Skill>
          <Skill>SAP</Skill>
        </Skills>
      </JobDetails>
    </Job>
    {/* Adicione outros trabalhos aqui */}
  </Section>
);

const Section = styled.section`
  padding: 80px 20px;
  background-color: #0a192f;
  color: #ccd6f6;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 10px;
  }
`;


const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Job = styled.div`
  margin-bottom: 20px;
  text-align: left;
  display: flex;
  justify-content: center;
`;

const JobDetails = styled.div`
  background-color: #112240;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 900px; // Ajuste para igualar ao Projects
  position: relative;
`;

const JobDate = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 0.8em;
  color: #64ffda;
`;

const JobTitle = styled.h3`
  font-size: 1.3em;
  margin: 0 0 10px;
  color: #ccd6f6;
`;

const JobDescription = styled.p`
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

export default Experience;
