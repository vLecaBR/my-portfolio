import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'about', 'experience', 'projects', 'contact'];
    let currentSection = 'home';

    for (let i = 0; i < sections.length; i++) {
      const element = document.getElementById(sections[i]);
      if (element) {
        const rect = element.getBoundingClientRect();
        console.log(`Section: ${sections[i]}, Top: ${rect.top}, Bottom: ${rect.bottom}`);
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = sections[i];
          break;
        }
      }
    }

    console.log(`Current Section: ${currentSection}`);
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
  padding: 20px;
  border-radius: 8px;
`;

const NavItem = styled.div`
  cursor: pointer;
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
