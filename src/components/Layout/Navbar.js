import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Rockets</Link>
    <Link to="/mission">Missions</Link>
    <Link to="/profile">My Profile</Link>
  </nav>
);

export default Navbar;
