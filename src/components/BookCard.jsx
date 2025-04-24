import { Link } from "react-router-dom";

function BookCard({ book }) {
  function handleDelete(id) {
    fetch(`http://localhost:3005/books/${id}`, {
      method: "DELETE",
    }).then(() => window.location.reload());
  }

  function toggleFavorite(book) {
    fetch(`http://localhost:3005/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favorite: !book.favorite }),
    }).then(() => window.location.reload());
  }

  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>By {book.author}</p>
      <div className="card-btn-group">
        <Link to={`/books/${book.id}`} className="details-btn">Details</Link>
        <button onClick={() => toggleFavorite(book)} className="favorite-btn">
          {book.favorite ? "💔" : "❤️"}
        </button>
        <Link to={`/edit/${book.id}`} className="edit-btn">Edit</Link>
        <button onClick={() => handleDelete(book.id)} className="delete-btn">Delete</button>
      </div>
    </div>
  );
}

export default BookCard;