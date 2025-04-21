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
}

export default BookCard;
