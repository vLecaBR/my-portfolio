import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'about', 'experience', 'projects', 'contact'];
    let currentSection = 'home';
    
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;
        const windowHeight = window.innerHeight;
        
        if (window.scrollY + windowHeight / 2 >= sectionTop && window.scrollY + windowHeight / 2 <= sectionBottom) {
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

const SidebarContainer = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;
  background: #0a192f;
  z-index: 1000;
  max-width: 250px;

  @media (max-width: 768px) {
    top: auto;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    flex-direction: row;
    padding: 5px;
    overflow-x: auto;
    max-width: calc(100% - 20px); /* Ajusta a largura máxima para considerar o padding */
    width: auto; /* Ajusta a largura automática */
    box-sizing: border-box; /* Inclui padding na largura total */
  }
`;

const NavItem = styled.div`
  cursor: pointer;
  color: ${props => (props.isActive ? '#64ffda' : '#8892b0')};
  font-size: 0.9em;
  margin: 5px 0;
  padding: 8px 15px;
  border-left: ${props => (props.isActive ? '2px solid #64ffda' : '2px solid transparent')};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #64ffda;
    border-left: 2px solid #64ffda;
  }

  @media (max-width: 768px) {
    margin: 0 5px;
    padding: 8px;
    border-left: none;
    border-bottom: ${props => (props.isActive ? '2px solid #64ffda' : '2px solid transparent')};

    &:hover {
      border-left: none;
      border-bottom: 2px solid #64ffda;
    }
  }
`;

export default Sidebar;
