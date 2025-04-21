import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then(res => res.json())
      .then(setBook);
  }, [id]);

  const toggleFavorite = () => {
    fetch(`http://localhost:3000/books/${book.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isFavorite: !book.isFavorite }),
    }).then(() => setBook({ ...book, isFavorite: !book.isFavorite }));
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Publication Year:</strong> {book.publicationYear}</p>
      <p><strong>Favorite:</strong> {book.isFavorite ? 'Yes' : 'No'} <button onClick={toggleFavorite}>{book.isFavorite ? '★' : '☆'}</button></p>
      <div className="flex gap-4">
        <Link to="/" className="text-blue-600">Back to List</Link>
        <Link to={`/edit/${book.id}`} className="text-green-600">Edit</Link>
      </div>
    </div>
  );
}
