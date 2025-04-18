import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";

function BookList() {
  // Store all books
  const [books, setBooks] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Search input
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch books from server
  useEffect(() => {
    fetch("http://localhost:3004/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Handle delete
  const handleDelete = (id) => {
    fetch(`http://localhost:3004/books/${id}`, {
      method: "DELETE",
    }).then(() => {
      const updated = books.filter((book) => book.id !== id);
      setBooks(updated);
    });
  };

  // Filter books based on search
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

      {loading ? (
        <p>Loading books...</p>
      ) : filteredBooks.length === 0 ? (
        <p>No matching books found.</p>
      ) : (
        filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
}

export default BookList;
