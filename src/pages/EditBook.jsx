import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBook({ ...book, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/books/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('✏️ Edited book:', data); // ✅ Console log
        navigate('/');
      });
  };

  if (!book) return <p>Loading book...</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold">Edit Book</h1>
      <input type="text" name="title" value={book.title} onChange={handleChange} className="w-full border p-2" required />
      <input type="text" name="author" value={book.author} onChange={handleChange} className="w-full border p-2" required />
      <input type="text" name="genre" value={book.genre} onChange={handleChange} className="w-full border p-2" required />
      <input type="number" name="publicationYear" value={book.publicationYear} onChange={handleChange} className="w-full border p-2" required />
      <label className="flex items-center gap-2">
        <input type="checkbox" name="isFavorite" checked={book.isFavorite} onChange={handleChange} /> Favorite
      </label>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Save Changes</button>
    </form>
  );
}
