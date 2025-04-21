// BookListPage.js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function BookListPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3004/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3004/books/${id}`, {
      method: "DELETE",
    }).then(() => {
      setBooks(books.filter((book) => book.id !== id));
    });
  };

  const handleToggleFavorite = (id) => {
    const book = books.find((b) => b.id === id);
    fetch(`http://localhost:3004/books/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        ...book,
        favorite: !book.favorite,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      setBooks(books.map((b) => (b.id === id ? { ...b, favorite: !b.favorite } : b)));
    });
  };

  return (
    <div>
      <h1>Book List</h1>
     
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onDelete={() => handleDelete(book.id)}
              onToggleFavorite={() => handleToggleFavorite(book.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default BookListPage;
