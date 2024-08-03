import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Header = () => (
  <Nav>
    <Logo>VL</Logo>
    <Menu>
      <MenuItem href="hhttps://github.com/vLecaBR" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </MenuItem>
      <MenuItem href="https://www.linkedin.com/in/victor-leça-040a021b9/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} />
      </MenuItem>
      <MenuItem href="https://www.instagram.com/vlecabr/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} />
      </MenuItem>
      {/* <ResumeButton href="#">Resume</ResumeButton> */}
    </Menu>
  </Nav>
);

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
`;

const Logo = styled.div`
  font-size: 23px;
  font-weight: bold;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItem = styled.a`
  margin: 0 15px;
  color: #141414;
  text-decoration: none;
`;

const ResumeButton = styled.a`
  padding: 8px 20px;
  border: 1px solid #141414;
  border-radius: 4px;
  text-decoration: none;
  color: #141414;
`;

export default Header;
