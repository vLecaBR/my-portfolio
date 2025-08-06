import React, { useState, useEffect, useCallback } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Nav, Logo, Menu, MenuItem, LangButton } from './Header.styles';
import { useLanguage } from '../../context/LanguageContext';

const socialLinks = [
  {
    href: 'https://github.com/vLecaBR',
    icon: FaGithub,
    label: 'GitHub Profile',
  },
  {
    href: 'https://www.linkedin.com/in/victor-leça-040a021b9/',
    icon: FaLinkedin,
    label: 'LinkedIn Profile',
  },
  {
    href: 'https://www.instagram.com/vlecabr/',
    icon: FaInstagram,
    label: 'Instagram Profile',
  },
];

const Header = () => {
  const [visible, setVisible] = useState(true);
  const { lang, toggleLang } = useLanguage();

  const handleScroll = useCallback(() => {
    // Debounce-like behavior usando setTimeout, evita flood
    let timeoutId;
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setVisible(window.scrollY < 50);
    }, 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Nav visible={visible} role="banner" aria-label="Main Navigation">
      <Logo tabIndex={0} aria-label="Logo VL">VL</Logo>
      <Menu>
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <MenuItem
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon size={24} />
          </MenuItem>
        ))}
        <LangButton
          onClick={toggleLang}
          aria-label={`Switch language to ${lang === 'en' ? 'Portuguese' : 'English'}`}
        >
          {lang === 'en' ? 'PT' : 'EN'}
        </LangButton>
      </Menu>
    </Nav>
  );
};

export default Header;
