import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Rockets</Link>
    <Link to="/">Missions</Link>
    <Link to="/">My Profile</Link>
  </nav>
);

export default Navbar;
