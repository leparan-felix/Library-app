import React, { useState, useEffect } from "react";
const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCIleEWfO4WAJV6zc1GjPi--ODEl78PUxWg&s",
  },
  {
    id: 2,
    title: "We Were Liars",
    author: "E. Lockhart",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv3AZsd6yJnjxsUJnA3HYrkoCCX5rXduRITA&s",
  },
  {
    id: 3,
    title: "Finish What You Start",
    author: "Peter Hollins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYkYunQa23owp_NgS8nVJYWn69PgByfplJQ&s",
  },
  {
    id: 4,
    title: "The Dating Game",
    author: "Sophie Sinclair",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPXdMmTI-LGXh0H9szPu8mHCItE9ppSec4Cw&s",
  },
  {
    id: 5,
    title: "Digital Age Strategy",
    author: "R. Lanier",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVLm-UDEBJZVXPC3Sr7r6av5wUgbDXiyQbw&s",
  },
];

function Home() {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Library App</h1>
        
      </header>

  
  <div className="max-w-xl mx-auto mt-12 px-4">
    <input
      type="text"
      placeholder="Search for books..."
      className="w-full border rounded-lg py-2 px-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
    {filteredBooks.map((book) => (
      <div
        key={book.id}
        className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition"
      >
        <img
          src={book.image}
          alt={book.title}
          className="h-52 w-full object-cover rounded mb-3"
        />
        <h2 className="font-semibold text-lg">{book.title}</h2>
        <p className="text-sm text-gray-600">{book.author}</p>
      </div>
    ))}
  </div>
</div>
  );
}

export default Home;