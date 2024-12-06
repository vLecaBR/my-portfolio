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
        Linkedin <Email href="https://www.linkedin.com/in/victor-leca-vlkbr/">Victor Leça</Email>. <br></br>
        GitHub <Email href="https://github.com/vLecaBR">vLecaBR</Email>. <br></br>
        Phone <Email href="tel:+5516988647864">+5516988647864 (WhatsApp)</Email>. <br></br>
        Email <Email href="mailto:vitartasleca@gmail.com">vitartasleca@gmail.com</Email>.
      </h4>
    </Text>
  </Section>
);


export default Contact;
