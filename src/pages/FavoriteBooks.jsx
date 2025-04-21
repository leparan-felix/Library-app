import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function FavoriteBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/books?isFavorite=true')
      .then((res) => res.json())
      .then(setBooks);
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/books/${id}`, { method: 'DELETE' })
      .then(() => setBooks(books.filter((book) => book.id !== id)));
  };

  const toggleFavorite = (book) => {
    fetch(`http://localhost:3000/books/${book.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isFavorite: !book.isFavorite }),
    }).then(() => setBooks(books.filter((b) => b.id !== book.id)));
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Favorite Books</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <li key={book.id} className="border rounded p-4 shadow">
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-600">by {book.author}</p>
            <button onClick={() => toggleFavorite(book)} className="text-yellow-500">
              {book.isFavorite ? '★' : '☆'}
            </button>
            <div className="mt-2 flex gap-2">
              <Link to={`/details/${book.id}`} className="text-blue-600">View</Link>
              <Link to={`/edit/${book.id}`} className="text-green-600">Edit</Link>
              <button onClick={() => handleDelete(book.id)} className="text-red-600">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
