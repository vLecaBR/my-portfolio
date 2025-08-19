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
          title: "FullStack Developer | Digitalization & AI - LongPing - High Tech",
          description: `I work on the development of web and mobile applications, creating modern and scalable solutions that generate direct business impact. I use ReactJS and React Native to build responsive, high-performance interfaces, applying Styled Components, React Hooks, and React Router to ensure maintainability and efficiency on the front end.
                        On the back end, I develop and maintain REST APIs with NodeJS, delivering robust integrations that support dynamic and complex systems.
                        In addition, I am part of the Digitalization & AI team, where we take on strategic projects, some in direct collaboration with the China team, with a strong focus on innovation, automation, and digital transformation. Within this context, I also work with the Microsoft Power Platform (Power Apps, Power Automate, and SharePoint), creating customized solutions such as automated approval flows, booking systems, smart forms, and corporate data integrations that increase productivity and streamline internal processes.
                        My focus is to deliver full-stack solutions that are practical, scalable, and user-centered, always aligned with business needs and the company’s vision of digitalization and artificial intelligence.`,
          skills: [
            "ReactJS", "React Native", "NodeJS", "REST APIs", "Styled Components", 
            "React Hooks", "React Router", "Power Platform", "Power Apps", 
            "Power Automate", "SharePoint", "Process Automation", 
            "Digital Transformation", "Scalable Solutions", 
            "FullStack Development", "UX"
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
          title: "Desenvolvedor FullStack | Digitalização & IA - LongPing - High Tech",
          description: `Atuo no desenvolvimento de aplicações web e mobile, criando soluções modernas e escaláveis que geram impacto direto no negócio. Utilizo ReactJS e React Native para construir interfaces responsivas e de alta performance, aplicando Styled Components, React Hooks e React Router para garantir manutenibilidade e eficiência no front-end.
                        No back-end, desenvolvo e mantenho APIs REST com NodeJS, entregando integrações robustas que suportam sistemas dinâmicos e complexos.
                        Além disso, faço parte do time de Digitalization & AI, onde assumimos projetos estratégicos, alguns em colaboração direta com o time da China, com foco em inovação, automação e transformação digital. Dentro desse contexto, atuo também com a Microsoft Power Platform (Power Apps, Power Automate e SharePoint), criando soluções customizadas como fluxos de aprovação automatizados, sistemas de reservas, formulários inteligentes e integrações corporativas que aumentam produtividade e otimizam processos internos.
                        Meu foco é entregar soluções full-stack práticas, escaláveis e centradas na experiência do usuário, sempre alinhadas às necessidades do negócio e à visão de digitalização e inteligência artificial da empresa.`,
          skills: [
            "ReactJS", "React Native", "NodeJS", "REST APIs", "Styled Components", 
            "React Hooks", "React Router", "Power Platform", "Power Apps", 
            "Power Automate", "SharePoint", "Process Automation", 
            "Digital Transformation", "Scalable Solutions", 
            "FullStack Development", "UX"
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
