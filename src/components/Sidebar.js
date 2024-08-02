import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleScroll = () => {
    const sections = ['about', 'experience', 'work', 'contact'];
    let currentSection = 'about';

    for (let i = 0; i < sections.length; i++) {
      const element = document.getElementById(sections[i]);
      const rect = element.getBoundingClientRect();

      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSection = sections[i];
        break;
      }
    }

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SidebarContainer>
      <NavItem isActive={activeSection === 'about'} href="#about">About</NavItem>
      <NavItem isActive={activeSection === 'experience'} href="#experience">Experience</NavItem>
      <NavItem isActive={activeSection === 'work'} href="#work">Work</NavItem>
      <NavItem isActive={activeSection === 'contact'} href="#contact">Contact</NavItem>
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
  background-color: #0a192f;
  padding: 20px;
  border-radius: 8px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: ${props => (props.isActive ? '#64ffda' : '#8892b0')};
  font-size: 1em;
  margin: 10px 0;
  padding: 10px 20px;
  border-left: ${props => (props.isActive ? '2px solid #64ffda' : '2px solid transparent')};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #64ffda;
    border-left: 2px solid #64ffda;
  }
`;

export default Sidebar;
