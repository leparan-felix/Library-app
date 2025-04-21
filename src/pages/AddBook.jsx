import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    publicationYear: '',
    isFavorite: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBook({ ...book, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('📘 Added book:', data); // ✅ Console log
        navigate('/');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold">Add New Book</h1>
      <input type="text" name="title" placeholder="Title" value={book.title} onChange={handleChange} className="w-full border p-2" required />
      <input type="text" name="author" placeholder="Author" value={book.author} onChange={handleChange} className="w-full border p-2" required />
      <input type="text" name="genre" placeholder="Genre" value={book.genre} onChange={handleChange} className="w-full border p-2" required />
      <input type="number" name="publicationYear" placeholder="Publication Year" value={book.publicationYear} onChange={handleChange} className="w-full border p-2" required />
      <label className="flex items-center gap-2">
        <input type="checkbox" name="isFavorite" checked={book.isFavorite} onChange={handleChange} /> Favorite
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Book</button>
    </form>
  );
}
