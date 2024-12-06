import React, { useState, useEffect } from 'react';
import { SidebarContainer, NavItem } from './Sidebar.styles';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');

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
        
        // Adicionar uma margem de 50 pixels para melhorar a detecção
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
      <NavItem
        isActive={activeSection === 'home'}
        onClick={() => handleNavItemClick('home')}
      >
        Home
      </NavItem>
      <NavItem
        isActive={activeSection === 'about'}
        onClick={() => handleNavItemClick('about')}
      >
        About
      </NavItem>
      <NavItem
        isActive={activeSection === 'experience'}
        onClick={() => handleNavItemClick('experience')}
      >
        Experience
      </NavItem>
      <NavItem
        isActive={activeSection === 'projects'}
        onClick={() => handleNavItemClick('projects')}
      >
        Projects
      </NavItem>
      <NavItem
        isActive={activeSection === 'contact'}
        onClick={() => handleNavItemClick('contact')}
      >
        Contact
      </NavItem>
    </SidebarContainer>
  );
};

export default Sidebar;
