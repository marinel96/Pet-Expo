import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/birds">Birds</Link>
      <Link to="/cats">Cats</Link>
      <Link to="/dogs">Dogs</Link>
    </nav>
  );
};

export default NavBar;

