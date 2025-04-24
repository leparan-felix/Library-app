import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

function FavoriteBooks() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/books?favorite=true")
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, []);

  return (
    <div className="favorites-container">
      {favorites.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default FavoriteBooks;