export default function SearchBar({ value, onChange }) {
  return (
    <label className="search-bar">
      <span className="search-bar__label">Search</span>
      <input
        className="search-bar__input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type a node label..."
      />
    </label>
  );
}
