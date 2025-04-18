import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3004/books/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch book');
        return res.json();
      })
      .then((data) => {
        setTitle(data.title || '');
        setAuthor(data.author || '');
        setGenre(data.genre || '');
        setImage(data.image || '');
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError(err.message || 'Something went wrong');
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = { title, author, genre, image };

    fetch(`http://localhost:3004/books/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to update book');
        return res.json();
      })
      .then(() => navigate('/'))
      .catch((err) => {
        console.error('Update error:', err);
        setError(err.message || 'Something went wrong');
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="edit-book">
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <label>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditBook;
