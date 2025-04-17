// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './pages/BookList';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import BookDetails from './pages/BookDetails';
import FavoriteBooks from './pages/FavoriteBooks';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container" >
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/details/:id" element={<BookDetails />} />
          <Route path="/favorites" element={<FavoriteBooks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
