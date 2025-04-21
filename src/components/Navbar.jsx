import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">📘 Library App</h1>
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/favorites" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Favorite Books
          </NavLink>
          
          <NavLink to="/BookList" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}></NavLink>
          
          <NavLink to="/add" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Add Book
          </NavLink>
          
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
