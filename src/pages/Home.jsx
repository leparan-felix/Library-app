import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

function Home() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3005/books")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch books");
        return res.json();
      })
      .then(data => {
        setBooks(data);
        setFilteredBooks(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  function handleSearch(query) {
    const results = books.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(results);
  }

  if (isLoading) return <p>Loading books...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="home-container">
      <SearchBar onSearch={handleSearch} />
      <div className="book-grid">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;
