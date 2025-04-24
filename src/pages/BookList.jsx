
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="book-grid">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
