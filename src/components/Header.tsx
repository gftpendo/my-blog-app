// src/components/Header.tsx
import React from 'react';

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
};

export default Header;

