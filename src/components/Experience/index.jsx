import React from 'react';

import {
  Section,
  Title,
  Job,
  JobDetails,
  JobDate,
  JobTitle,
  JobDescription,
  Skills,
  Skill,
} from './Experience.styles';

const Experience = () => (
  <Section id="experience">
    <Title>Experience</Title>

    
    <Job>
    <JobDetails>
        <JobDate>Semptember 2024 - Present</JobDate>
        <JobTitle>JR Automation Assistant - LongPing - High Tech</JobTitle>
        <JobDescription>
        I work in the development and maintenance of customized solutions using the Power Platform, 
        where I create websites, applications, forms, and approval workflows. My experience includes 
        creating and maintaining automated workflows, lists, and libraries in SharePoint, Power Automate, 
        and Power Apps. Additionally, I develop dynamic websites using ReactJS and mobile applications with 
        React Native, catering to specific user requests. I implement automation processes ranging from simple 
        workflows, such as automatic email sending, to complex approval processes, ensuring efficiency and 
        effectiveness in operations. I also focus on identifying and applying the most suitable technologies 
        for solution development, ensuring optimal usability and performance in each project. I am committed 
        to providing solutions that meet users' specific needs and enhancing the digital experience within the organization.
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
          <Skill>React Native</Skill>
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

export default Experience;
