import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <Glow style={{ left: position.x, top: position.y }} />;
};

const Glow = styled.div`
  position: fixed;
  width: 400px; /* Aumenta ainda mais o tamanho */
  height: 400px; /* Aumenta ainda mais o tamanho */
  background: radial-gradient(circle, rgba(100, 255, 218, 0.04) 0%, rgba(100, 255, 218, 0) 100%);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: background 0.3s ease;
  z-index: 1;
`;

export default MouseGlow;
