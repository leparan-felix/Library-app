import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
       Home
       </NavLink>
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
        Book List
      </NavLink>
      <NavLink to="/add" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
        Add Book
      </NavLink>
      <NavLink to="/favorites" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
        Favorite Books
      </NavLink>
     
    </nav>
  );
}

export default Navbar;
