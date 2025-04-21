import React from "react";

const BookCard = ({ book, handleDelete }) => {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      <p>{book.year}</p>
      <button onClick={() => handleDelete(book.id)}>Delete</button>
    </div>
  );
};

export default BookCard;
