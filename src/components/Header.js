import React from 'react';
import logo from '../logo.png';
import Navbar from './Navbar';

const Header = () => (
  <header>
    <a href="/">
      <img src={logo} alt="Space Travelers' logo" />
      <span>Space Travelers Hub</span>
    </a>
    <Navbar />
  </header>
);

export default Header;
