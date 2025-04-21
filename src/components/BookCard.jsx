
import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book, onDelete, onEdit }) {
  return (
    <div className="book-card border p-4 shadow-md mb-4 rounded">
      <h3 className="text-lg font-bold">{book.title}</h3>
      <p className="text-gray-700">Author: {book.author}</p>
      <p className="text-gray-600">Genre: {book.genre}</p>
      <p className="text-gray-600">Year: {book.publicationYear}</p>

      <div className="mt-2 space-x-2">
        <button onClick={onEdit} className="bg-yellow-400 px-3 py-1 rounded">
          ✏️ Edit
        </button>
        <button onClick={onDelete} className="bg-red-500 text-white px-3 py-1 rounded">
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default BookCard;
