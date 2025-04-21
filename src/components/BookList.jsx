import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookCard from "./BookCard";

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [bookToDelete, setBookToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const booksPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch books.");
        return res.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false);
        console.log("Fetched books:", data); // For inspection in the console
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load books. Please try again later.");
        setLoading(false);
      });
  }, []);

  const handleDeleteConfirm = () => {
    if (!bookToDelete) return;

    fetch(`http://localhost:3000/books/${bookToDelete.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete the book.");
        setBooks((prev) => prev.filter((book) => book.id !== bookToDelete.id));
        setBookToDelete(null);
        console.log(`Book with ID ${bookToDelete.id} deleted`);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to delete the book.");
        setBookToDelete(null);
      });
  };

  const sortedBooks = [...books].sort((a, b) =>
    sortOrder === "asc"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title)
  );

  const filteredBooks = sortedBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  return (
    <div className="booklist-container">
      <h1 className="text-2xl font-bold mb-4">Book List</h1>
      <div className="booklist-header">
        <input
          type="text"
          placeholder="Search books"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 w-full mb-4"
        />

        <div className="sort-controls">
          <label>Sort by title: </label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="ml-2"
          >
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>

        <p className="book-count">
          {filteredBooks.length} book{filteredBooks.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {error && <p className="error">{error}</p>}

      {loading ? (
        <div className="spinner">🔄 Loading books...</div>
      ) : filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <>
          <div className="booklist-grid">
            {currentBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onDelete={() => setBookToDelete(book)}
                onEdit={() => navigate(`/edit/${book.id}`)}
              />
            ))}
          </div>

          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}

      {bookToDelete && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Are you sure you want to delete "{bookToDelete.title}"?</p>
            <button onClick={handleDeleteConfirm}>Yes, Delete</button>
            <button onClick={() => setBookToDelete(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookList;
