import React from 'react';
import logo from '../../logo.png';
import Navbar from './Navbar';
import './Header.css';

const Header = () => (
  <header className="page-header">
    <a href="/" className="brand">
      <img src={logo} alt="Space Travelers' logo" className="logo" />
      <span className="brand-name">Space Travelers Hub</span>
    </a>
    <Navbar />
  </header>
);

export default Header;
