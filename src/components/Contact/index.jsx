import React from 'react';
import { Section, Title, Text, Email } from './Contact.styles';
import { useLanguage } from '../../context/LanguageContext';

const Contact = () => {
  const { lang } = useLanguage();

  const labels = {
    en: {
      title: 'Contact',
      linkedin: 'Linkedin',
      github: 'GitHub',
      phone: 'Phone',
      whatsapp: '(WhatsApp)',
      email: 'Email',
      name: 'Victor Leça',
      githubUser: 'vLecaBR',
      phoneNumber: '+5516988647864',
      emailAddress: 'vitartasleca@gmail.com',
    },
    pt: {
      title: 'Contato',
      linkedin: 'Linkedin',
      github: 'GitHub',
      phone: 'Telefone',
      whatsapp: '(WhatsApp)',
      email: 'Email',
      name: 'Victor Leça',
      githubUser: 'vLecaBR',
      phoneNumber: '+5516988647864',
      emailAddress: 'vitartasleca@gmail.com',
    },
  };

  return (
    <Section id="contact">
      <Title>{labels[lang].title}</Title>
      <Text>
        <h4>
          {labels[lang].linkedin}{' '}
          <Email
            href="https://www.linkedin.com/in/victor-leca-vlkbr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {labels[lang].name}
          </Email>
          . <br />
          {labels[lang].github}{' '}
          <Email
            href="https://github.com/vLecaBR"
            target="_blank"
            rel="noopener noreferrer"
          >
            {labels[lang].githubUser}
          </Email>
          . <br />
          {labels[lang].phone}{' '}
          <Email
            href="tel:+5516988647864"
            target="_blank"
            rel="noopener noreferrer"
          >
            {labels[lang].phoneNumber} {labels[lang].whatsapp}
          </Email>
          . <br />
          {labels[lang].email}{' '}
          <Email
            href="mailto:vitartasleca@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {labels[lang].emailAddress}
          </Email>
          .
        </h4>
      </Text>
    </Section>
  );
};

export default Contact;
