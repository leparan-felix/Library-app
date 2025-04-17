// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#eee' }}>
      <Link to="/">Home</Link>
      <Link to="/add">Add Book</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
}

export default Navbar;
