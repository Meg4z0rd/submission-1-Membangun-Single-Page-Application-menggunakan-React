function SearchBar({ keyword, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Cari catatan..."
        value={keyword}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;