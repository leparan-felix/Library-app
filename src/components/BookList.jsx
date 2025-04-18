// Import required hooks and component
import { useEffect, useState } from "react";
import BookCard from "./BookCard";

function BookList() {
  // State to store all books
  const [books, setBooks] = useState([]);

  // State to track loading
  const [loading, setLoading] = useState(true);

  // Fetch books when component loads
  useEffect(() => {
    fetch("http://localhost:3004/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);        // Store books in state
        setLoading(false);     // Stop loading spinner
      })
      .catch(() => setLoading(false)); // Stop loading if there's an error
  }, []);

  // Handle delete button
  const handleDelete = (id) => {
    fetch(`http://localhost:3004/books/${id}`, {
      method: "DELETE",
    }).then(() => {
      // Filter out deleted book from UI
      const updated = books.filter((book) => book.id !== id);
      setBooks(updated);
    });
  };

  // Show loading text if fetching
  if (loading) return <p>Loading books...</p>;

  return (
    <div>
      <h2>📚 Book List</h2>

      {/* Show message if no books */}
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        // Loop through all books and render BookCard
        books.map((book) => (
          <BookCard key={book.id} book={book} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
}

export default BookList;
