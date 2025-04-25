import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
    image: "",
    favorite: false,
  });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://library-jsonserver.vercel.app/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => navigate("/books"));
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add New Book</h2>
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <input name="author" placeholder="Author" onChange={handleChange} required />
      <input name="genre" placeholder="Genre" onChange={handleChange} required />
      <input name="year" placeholder="Year" type="number" onChange={handleChange} required />
      <input name="image" placeholder="Image URL" onChange={handleChange} required />
      <label>
        <input name="favorite" type="checkbox" onChange={handleChange} />
        Mark as Favorite
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;