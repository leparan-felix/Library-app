
import React, { useEffect, useState } from "react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BookCard from "./BookCard";

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [bookToDelete, setBookToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  const navigate = useNavigate();

  useEffect(() => {

    fetch("http://localhost:3007/books")
      .then((res) => res.json())

    fetch("http://localhost:3004/books")
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
        setError("Could not load books. Please try again later.");
        setLoading(false);
      });
  }, []);


  const handleDelete = (id) => {
    fetch(`http://localhost:3007/books/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedBooks = books.filter((book) => book.id !== id);
        setBooks(updatedBooks);

  const handleDeleteConfirm = () => {
    if (!bookToDelete) return;

    fetch(`http://localhost:3004/books/${bookToDelete.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete the book.");
        setBooks((prev) => prev.filter((book) => book.id !== bookToDelete.id));
        setBookToDelete(null);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to delete the book.");
        setBookToDelete(null);

      });
  };

  const sortedBooks = books.sort((a, b) =>
    sortOrder === "asc"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title)
  );

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = sortedBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(books.length / booksPerPage);

  return (

    <div>
      <input
        type="text"
        placeholder="Search books"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} handleDelete={handleDelete} />
        ))

    <div className="booklist-container">
      <div className="booklist-header">
       
        <div className="sort-controls">
          <label>Sort by:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            
          </select>
        </div>
        <p className="book-count">
          {books.length} book{books.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {error && <p className="error">{error}</p>}

      {loading ? (
        <div className="spinner">🔄 Loading books...</div>
      ) : books.length === 0 ? (
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
