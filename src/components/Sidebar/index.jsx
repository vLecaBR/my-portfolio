import React, { useState, useEffect } from 'react';
import { SidebarContainer, NavItem } from './Sidebar.styles';
import { useLanguage } from '../../context/LanguageContext';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { lang } = useLanguage();

  const labels = {
    en: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    pt: {
      home: 'Início',
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Projetos',
      contact: 'Contato',
    },
  };

  const handleScroll = () => {
    const sections = ['home', 'about', 'experience', 'projects', 'contact'];
    let currentSection = 'home';

    const scrollPosition = window.scrollY + window.innerHeight / 2; // Ponto de verificação

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        if (scrollPosition >= sectionTop - 50 && scrollPosition <= sectionBottom) {
          currentSection = section;
        }
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavItemClick = (section) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveSection(section);
  };

  return (
    <SidebarContainer>
      {Object.entries(labels[lang]).map(([key, label]) => (
        <NavItem
          key={key}
          isActive={activeSection === key}
          onClick={() => handleNavItemClick(key)}
        >
          {label}
        </NavItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
