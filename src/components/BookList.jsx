import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

function BookList() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3007/books")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch books.");
        return res.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load books.");
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3007/books/${id}`, {
      method: "DELETE",
    }).then(() => {
      const updatedBooks = books.filter((book) => book.id !== id);
      setBooks(updatedBooks);
    });
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="book-list">
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {error && <p>{error}</p>}

      {loading ? (
        <p>Loading books...</p>
      ) : filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onDelete={() => handleDelete(book.id)}
          />
        ))
      )}
    </div>
  );
}

export default BookList;
