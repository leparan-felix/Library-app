import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-8 text-center">
      <h2 className="text-4xl font-bold mb-4">📚 Welcome to the Library App</h2>
      <p className="text-lg text-gray-700 mb-6">
        Manage your book collection with ease. Add, edit, favorite, and delete books.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          to="/books"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          View Books
        </Link>
        <Link
          to="/add"
          className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition"
        >
          Add a Book
        </Link>
      </div>
    </div>
  );
};

export default Home;
