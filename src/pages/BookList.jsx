
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://library-jsonserver.vercel.app/books")
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
