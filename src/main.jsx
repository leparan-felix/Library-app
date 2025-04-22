import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
// import BookList from './pages/BookList';
// import AddBook from './pages/AddBook';
// import EditBook from './pages/EditBook';
// import BookDetails from './pages/BookDetails';
// import FavoriteBooks from './pages/FavoriteBooks';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);