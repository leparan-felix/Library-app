
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://library-jsonserver.vercel.app/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="book-detail">
      <img src={book.image} alt={book.title} />
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p><strong>Favorite:</strong> {book.favorite ? "Yes" : "No"}</p>
      <Link to={`/edit/${book.id}`} className="details-btn">Edit Book</Link>
    </div>
  );
}

export default BookDetails;
