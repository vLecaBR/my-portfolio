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
import { useLanguage } from '../../context/LanguageContext';

const Experience = () => {
  const { lang } = useLanguage();

  const text = {
    en: {
      title: "Experience",
      jobs: [
        {
          date: "September 2024 - Present",
          title: "JR Automation Assistant - LongPing - High Tech",
          description: `I work in the development and maintenance of customized solutions using the Power Platform, 
          where I create websites, applications, forms, and approval workflows. My experience includes 
          creating and maintaining automated workflows, lists, and libraries in SharePoint, Power Automate, 
          and Power Apps. Additionally, I develop dynamic websites using ReactJS and mobile applications with 
          React Native, catering to specific user requests. I implement automation processes ranging from simple 
          workflows, such as automatic email sending, to complex approval processes, ensuring efficiency and 
          effectiveness in operations. I also focus on identifying and applying the most suitable technologies 
          for solution development, ensuring optimal usability and performance in each project. I am committed 
          to providing solutions that meet users' specific needs and enhancing the digital experience within the organization.`,
          skills: [
            "ReactJS", "JavaScript", "HTML", "CSS", "React Native", "NodeJS", 
            "SharePoint", "Power Automate", "Power Apps", "Power FX", "Power Platform"
          ],
        },
        {
          date: "February 2023 - September 2024",
          title: "Helpdesk Intern - LongPing - High Tech",
          description: `Working with in-person and remote calls to correct problems such as VPN, 
          password issues, bug fixes, creating groups and user management using Active Directory, creating shell scripts for remote execution, reducing around 10 hours 
          of manual work monthly, network monitoring, and internal services using Zabbix and 
          Grafana, improving monitoring by 20%, maintenance of notebooks, desktops, monitors, 
          responsible for extracting and making .MSIX files available for installation, stock 
          control and dispatch of equipment, creation of websites aimed at the internal public (intranet).`,
          skills: [
            "React", "HTML", "CSS", "JavaScript", "Active Directory", "Windows support", 
            "Zabbix", "Grafana", "VPN", "PowerShell", "SAP"
          ],
        },
        {
          date: "February 2021 - January 2023",
          title: "IT / Facilities Apprentice - TMF Group",
          description: `Apprentice in 3 areas: Administrative, IT, and Facilities. IT experience includes 
          help desk support tasks, reducing service time by 30%, formatting and preparing machines
          for integration, remote support, equipment delivery and inventory control, improving IT 
          stock by 35%. In the administrative and facilities area, activities were related to the 
          GAO (General Affairs Office), office presentation, and benefits. Additionally, participated
          in general onboarding, took care of the office, and managed service notes for purchased equipment.
          Also obtained quotes for pest control and painting. For 1 and a half years, worked remotely, and 
          in the last 6 months, adopted the hybrid model.`,
          skills: [
            "Active Directory", "Windows support", "VPN", "PowerShell", "SAP"
          ],
        },
      ],
    },
    pt: {
      title: "Experiência",
      jobs: [
        {
          date: "Setembro 2024 - Presente",
          title: "Assistente Jr. de Automação - LongPing - High Tech",
          description: `Atualmente atuo no desenvolvimento de aplicações web e mobile, utilizando ReactJS e React Native para criar interfaces modernas, responsivas e de fácil manutenção.
          No front-end, aplico Styled Components, React Hooks e React Router para gerenciar estados, navegação e estilização de forma eficiente. No back-end, desenvolvo e mantenho APIs REST com NodeJS, construindo soluções escaláveis e integradas que suportam sistemas dinâmicos e complexos.
          Além disso, trabalho com a Power Platform, incluindo Power Apps, Power Automate e SharePoint, desenvolvendo soluções customizadas, como fluxos de aprovação automatizados, sistemas de reserva, formulários inteligentes e integração com dados corporativos, otimizando processos internos e aumentando a produtividade das equipes.
          Meu foco é entregar soluções full-stack práticas e eficientes, que unam desenvolvimento web moderno, automação de processos e melhoria da experiência digital do usuário, sempre alinhadas às necessidades do negócio.`,
          skills: [
            "ReactJS", "JavaScript", "HTML", "CSS", "React Native", "NodeJS", 
            "SharePoint", "Power Automate", "Power Apps", "Power FX", "Power Platform"
          ],
        },
        {
          date: "Fevereiro 2023 - Setembro 2024",
          title: "Estagiário Helpdesk - LongPing - High Tech",
          description: `Atendimento presencial e remoto para correção de problemas como VPN, 
          questões de senha, correções de bugs, criação de grupos e gerenciamento de usuários usando Active Directory, criação de scripts shell para execução remota, reduzindo cerca de 10 horas 
          de trabalho manual mensalmente, monitoramento de rede e serviços internos usando Zabbix e 
          Grafana, melhorando o monitoramento em 20%, manutenção de notebooks, desktops, monitores, 
          responsável pela extração e disponibilização de arquivos .MSIX para instalação, controle de estoque e despacho de equipamentos, criação de sites voltados ao público interno (intranet).`,
          skills: [
            "React", "HTML", "CSS", "JavaScript", "Active Directory", "Windows support", 
            "Zabbix", "Grafana", "VPN", "PowerShell", "SAP"
          ],
        },
        {
          date: "Fevereiro 2021 - Janeiro 2023",
          title: "Aprendiz de TI / Facilities - TMF Group",
          description: `Aprendiz em 3 áreas: Administrativo, TI e Facilities. Experiência em TI inclui 
          tarefas de suporte help desk, reduzindo o tempo de atendimento em 30%, formatação e preparação de máquinas
          para integração, suporte remoto, entrega de equipamentos e controle de inventário, melhorando o estoque de TI em 35%. Na área administrativa e de facilities, as atividades estavam relacionadas ao 
          GAO (Gabinete de Assuntos Gerais), apresentação do escritório e benefícios. Além disso, participei 
          do onboarding geral, cuidei do escritório e gerenciei notas de serviço para equipamentos comprados.
          Também obtive orçamentos para controle de pragas e pintura. Por 1 ano e meio, trabalhei remotamente e, 
          nos últimos 6 meses, adotei o modelo híbrido.`,
          skills: [
            "Active Directory", "Windows support", "VPN", "PowerShell", "SAP"
          ],
        },
      ],
    },
  };

  return (
    <Section id="experience">
      <Title>{text[lang].title}</Title>

      {text[lang].jobs.map(({ date, title, description, skills }, idx) => (
        <Job key={idx}>
          <JobDetails>
            <JobDate>{date}</JobDate>
            <JobTitle>{title}</JobTitle>
            <JobDescription>{description}</JobDescription>
            <Skills>
              {skills.map((skill, i) => (
                <Skill key={i}>{skill}</Skill>
              ))}
            </Skills>
          </JobDetails>
        </Job>
      ))}
    </Section>
  );
};

export default Experience;
