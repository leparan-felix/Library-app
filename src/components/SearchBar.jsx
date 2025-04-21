function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by title, author, or keyword..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
      <span className="search-icon">🔍</span>
    </div>
  );
}

export default SearchBar;