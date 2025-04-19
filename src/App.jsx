import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import './css/App.css'; 

function App() {
  return (
    <div id="root">
      <Router>
        <header className="header">
          <h1>My Personal Book Library</h1>
          <Navbar />
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png" 
            alt="Book Library Logo" 
            className="logo" 
          />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/books" element={<BookList />} />
          </Routes>
        </main>

        <footer className="library-footer">
          <p>© {new Date().getFullYear()} My Personal Library. All rights reserved.</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;