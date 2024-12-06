import React from 'react';

import {
  Section,
  Title,
  Text,
  Email,
} from './Contact.styles';

const Contact = () => (
  <Section id="contact">
    <Title>Contact</Title>
    <Text>
      <h4>
        Linkedin <Email href="https://www.linkedin.com/in/victor-leca-vlkbr/" target="_blank" rel="noopener noreferrer" >Victor Leça</Email>. <br></br>
        GitHub <Email href="https://github.com/vLecaBR" target="_blank" rel="noopener noreferrer" >vLecaBR</Email>. <br></br>
        Phone <Email href="tel:+5516988647864" target="_blank" rel="noopener noreferrer" >+5516988647864 (WhatsApp)</Email>. <br></br>
        Email <Email href="mailto:vitartasleca@gmail.com" target="_blank" rel="noopener noreferrer" >vitartasleca@gmail.com</Email>.
      </h4>
    </Text>
  </Section>
);


export default Contact;
