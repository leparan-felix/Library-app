import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Home from './pages/Home';
import AddBook from './pages/AddBook';


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/add" element={<AddBook />} />
        <Route path="/books" element={<BookList />} />
        
      </Routes>
    </Router>
  );
}

export default App;