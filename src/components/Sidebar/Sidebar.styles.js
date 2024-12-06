import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  padding: 20px; /* Aumentado o padding para web */
  border-radius: 8px;
  background: transparent; /* Remover o fundo da sidebar */
  max-width: 300px; /* Aumentado o max-width para web */

  @media (max-width: 768px) {
    top: auto;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    flex-direction: row;
    padding: 5px;
    overflow-x: hidden;
    max-width: calc(100% - 20px); /* Ajusta a largura máxima para considerar o padding */
    width: auto; /* Ajusta a largura automática */
    box-sizing: border-box; /* Inclui padding na largura total */
    background-color: #112240; /* Cor de fundo adicionado somente mobile */
  }
`;

export const NavItem = styled.div`
  cursor: pointer;
  color: ${props => (props.isActive ? '#64ffda' : '#8892b0')};
  font-size: 1em; /* Aumentado o tamanho da fonte para web */
  margin: 10px 0; /* Aumentado o espaço entre os itens */
  padding: 10px 20px; /* Aumentado o padding para web */
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
    font-size: 0.8em; /* Ajusta o tamanho da fonte para mobile */

    &:hover {
      border-left: none;
      border-bottom: 2px solid #64ffda;
    }
  }
`;