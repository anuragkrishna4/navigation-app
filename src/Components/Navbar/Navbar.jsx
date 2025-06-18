// src/components/Navbar/Navbar.js
import React, { useState } from 'react';
import NavItem from './NavItem';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const items = ['Home', 'About', 'Services', 'Contact'];

  return (
    <nav className="navbar">
      {items.map((item) => (
        <NavItem
          key={item}
          label={item}
          isActive={active === item}
          onClick={() => setActive(item)}
        />
      ))}
    </nav>
  );
};

export default Navbar;
