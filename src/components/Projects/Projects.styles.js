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

  @media (max-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 15px;
  }
`;

export const Project = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ProjectDetails = styled.div`
  background-color: #112240;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 900px;

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 100%;
  }
`;

export const ProjectContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectImageWrapper = styled.div`
  flex: 0 0 40%;
  margin-right: 20px;
  overflow: hidden;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex: 0 0 auto;
    margin-right: 0;
    margin-bottom: 15px;
    width: 80%;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  max-width: 1920px;
  max-height: 1080px;
`;

export const ProjectContent = styled.div`
  flex: 1 1 60%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex: 1 1 auto;
    text-align: center;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.3em;
  margin-bottom: 10px;
  color: #ccd6f6;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 0.9em;
  line-height: 1.4;
  color: #8892b0;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: center;
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

export const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  border: 1px solid #64ffda;
  border-radius: 4px;
  text-decoration: none;
  color: #64ffda;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #64ffda;
    color: #0a192f;
  }
`;