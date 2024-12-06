import styled from 'styled-components';

export const Section = styled.section`
  padding: 80px 20px;
  background-color: #0a192f;
  color: #ccd6f6;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 10px;
  }
`;


export const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

export const Job = styled.div`
  margin-bottom: 20px;
  text-align: left;
  display: flex;
  justify-content: center;
`;

export const JobDetails = styled.div`
  background-color: #112240;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 900px; // Ajuste para igualar ao Projects
  position: relative;
`;

export const JobDate = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 0.8em;
  color: #64ffda;
`;

export const JobTitle = styled.h3`
  font-size: 1.3em;
  margin: 0 0 10px;
  color: #ccd6f6;
`;

export const JobDescription = styled.p`
  font-size: 0.9em;
  line-height: 1.4;
  color: #8892b0;
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
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