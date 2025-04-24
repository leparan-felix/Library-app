import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditBook() {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3005/books/${id}`)
      .then(res => res.json())
      .then(data => setForm(data));
  }, [id]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3005/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(() => navigate("/books"));
  }

  if (!form) return <p>Loading...</p>;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Edit Book</h2>
      <input name="title" value={form.title} onChange={handleChange} />
      <input name="author" value={form.author} onChange={handleChange} />
      <input name="genre" value={form.genre} onChange={handleChange} />
      <input name="year" type="number" value={form.year} onChange={handleChange} />
      <input name="image" value={form.image} onChange={handleChange} />
      <label>
        <input name="favorite" type="checkbox" checked={form.favorite} onChange={handleChange} />
        Mark as Favorite
      </label>
      <button type="submit">Update Book</button>
    </form>
  );
}

export default EditBook;