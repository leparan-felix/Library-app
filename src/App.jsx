// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './pages/BookList';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/BookList" element={<BookList />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
