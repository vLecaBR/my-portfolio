import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  padding: 0 100px;
  background-color: #0a192f;
  color: #ccd6f6;
  padding-top: 30px;

  @media (max-width: 768px) {
    padding: 0 50px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

export const Intro = styled.h1`
  color: #64ffda;

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

export const Name = styled.h2`
  font-size: 3.5em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 3em;
  }

  @media (max-width: 480px) {
    font-size: 2.5em;
  }
`;

export const Subtitle = styled.h3`
  font-size: 2.5em;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.75em;
  }
`;

export const Description = styled.p`
  max-width: 540px;
  line-height: 1.5;
  margin: 20px 0;

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

export const Button = styled.a`
  padding: 15px 20px;
  background-color: transparent;
  border: 1px solid #64ffda;
  border-radius: 4px;
  color: #64ffda;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover,
  &:focus-visible {
    background-color: #64ffda;
    color: #0a192f;
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 0.9em;
  }
`;


export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  max-width: 540px;
`;

export const Skill = styled.span`
  background-color: #112240;
  border: 1px solid #64ffda;
  border-radius: 4px;
  padding: 5px 10px;
  margin: 5px;
  font-size: 0.8em;
  color: #64ffda;
`;