import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Nav>
    <Logo>VL</Logo>
    <Menu>
      <MenuItem href="#about">About</MenuItem>
      <MenuItem href="#experience">Experience</MenuItem>
      <MenuItem href="#work">Work</MenuItem>
      <MenuItem href="#contact">Contact</MenuItem>
      <ResumeButton href="#">Resume</ResumeButton>
    </Menu>
  </Nav>
);

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItem = styled.a`
  margin: 0 15px;
  color: #a8b2d1;
  text-decoration: none;
`;

const ResumeButton = styled.a`
  padding: 8px 20px;
  border: 1px solid #a8b2d1;
  border-radius: 4px;
  text-decoration: none;
  color: #a8b2d1;
`;

export default Header;
