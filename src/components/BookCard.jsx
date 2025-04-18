function BookCard({ book, onDelete }) {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Year: {book.publicationYear}</p>
      <p>Favorite: {book.isFavorite ? "❤️" : "❌"}</p>

      <button className="delete-button" onClick={() => onDelete(book.id)}>
        Delete
      </button>
    </div>
  );
}

export default BookCard;
