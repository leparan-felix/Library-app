import React from "react";

const BookCard = ({ book, onDelete }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      <p>{book.year}</p>
      <button onClick={onDelete}>❌ Delete</button>
    </div>
  );
};

export default BookCard;
