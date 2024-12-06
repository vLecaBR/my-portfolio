import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

import {
  Nav,
  Logo,
  Menu,
  MenuItem 
} from './Header.styles';

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

export default Header;
