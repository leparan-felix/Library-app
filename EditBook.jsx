import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditBook = () => {
  const { id } = useParams(); // Get book ID from URL
  const navigate = useNavigate(); // For redirecting

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch book data by ID and prefill form
  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch book data');
        return res.json();
      })
      .then((data) => {
        setTitle(data.title);
        setAuthor(data.author);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/books/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, author }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to update book');
        return res.json();
      })
      .then(() => navigate('/')) // Redirect after update
      .catch((err) => setError(err.message));
  };

  // Show loading or error message
  if (loading) return <p>Loading book details...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  // Render form
  return (
    <div className="edit-book">
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBook;
