import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Header = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav visible={visible}>
      <Logo>VL</Logo>
      <Menu>
        <MenuItem href="https://github.com/vLecaBR" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </MenuItem>
        <MenuItem href="https://www.linkedin.com/in/victor-leça-040a021b9/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </MenuItem>
        <MenuItem href="https://www.instagram.com/vlecabr/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </MenuItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  background-color: #0a192f;
  color: #64ffda;
  position: fixed;
  width: 100%;
  top: 0;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: translateY(${({ visible }) => (visible ? '0' : '-20px')});
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  border: 1px solid #64ffda;
  padding: 10px;
  border-radius: 5px;

  @media (max-width: 480px) {
    margin-left: 0px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

const MenuItem = styled.a`
  margin: 0 10px; 
  padding: 0;
  color: #64ffda;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

export default Header;
