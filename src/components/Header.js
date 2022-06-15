import React from 'react';
import logo from '../logo.png';

const Header = () => (
  <header>
    <a href="/">
      <img src={logo} alt="Space Travelers' logo" />
      <span>Space Travelers Hub</span>
    </a>
  </header>
);

export default Header;
