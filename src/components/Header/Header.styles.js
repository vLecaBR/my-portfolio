import styled from 'styled-components';

export const Nav = styled.nav`
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
    @media (max-width: 480px) {
    display: none;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  border: 1px solid #64ffda;
  padding: 10px;
  border-radius: 5px;

  @media (max-width: 480px) {
    margin-left: 0px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

export const MenuItem = styled.a`
  margin: 0 10px; 
  padding: 0;
  color: #64ffda;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

export const LangButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 14px;
  cursor: pointer;
  padding: 4px 8px;
  transition: 0.2s;
  &:hover {
    opacity: 0.7;
  }
`;
