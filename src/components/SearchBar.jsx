import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleInput(e) {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={handleInput}
      />
    </div>
  );
}

export default SearchBar;