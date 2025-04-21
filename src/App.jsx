import { Routes, Route, Link } from 'react-router-dom';
import BookList from './pages/BookList';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import BookDetails from './pages/BookDetails';
import FavoriteBooks from './pages/FavoriteBooks';
import Navbar from './components/Navbar';

import Home from './pages/Home';
export default function App() {
  return (
    <div className="p-4">
      <Navbar />
      <Home />
      
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/details/:id" element={<BookDetails />} />
        <Route path="/favorites" element={<FavoriteBooks />} />
      </Routes>
    </div>
  );
}