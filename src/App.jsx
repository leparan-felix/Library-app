// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container" style={{ padding: '1rem' }}>
        <Routes>
          {/* Add your real pages here */}
          <Route path="/" element={<h1>Home Page</h1>} />
        
          <Route path="/add" element={<h1>Add Book Page</h1>} />
          <Route path="/edit" element={<h1>Edit Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
