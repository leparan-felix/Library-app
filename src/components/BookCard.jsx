
import React from "react";

const BookCard = ({ book, handleDelete }) => {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      <p>{book.year}</p>
      <button onClick={() => handleDelete(book.id)}>Delete</button>

import { Link } from "react-router-dom";

function BookCard({ book, onDelete, onEdit }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button onClick={onEdit}>✏️ Edit</button>
      <button onClick={onDelete}>🗑️ Delete</button>

    </div>
  );
};

export default BookCard;
