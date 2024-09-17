import React from 'react';
import styled from 'styled-components';

const Contact = () => (
  <Section id="contact">
    <Title>Contact</Title>
    <Text>
      <h4>
        Linkedin <Email href="https://www.linkedin.com/in/victor-leca-vlkbr/">Victor Leça</Email>. <br></br>
        GitHub <Email href="https://github.com/vLecaBR">vLecaBR</Email>. <br></br>
        Phone <Email href="tel:+5516988647864">+5516988647864 (preference for WhatsApp)</Email>. <br></br>
        Email <Email href="mailto:vitartasleca@gmail.com">vitartasleca@gmail.com</Email>.
      </h4>
    </Text>
  </Section>
);

const Section = styled.section`
  padding: 100px 0;
  background-color: #0a192f;
  color: #ccd6f6;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Text = styled.p`
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
`;

const Email = styled.a`
  color: #64ffda;
  text-decoration: none;
`;

export default Contact;
