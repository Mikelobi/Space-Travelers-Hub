import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
      Rockets
    </NavLink>
    <NavLink
      to="/mission"
      className={({ isActive }) => (isActive ? 'active' : '')}
    >
      Missions
    </NavLink>
    <NavLink
      to="/profile"
      className={({ isActive }) => (isActive ? 'active' : '')}
    >
      My Profile
    </NavLink>
  </nav>
);

export default Navbar;
