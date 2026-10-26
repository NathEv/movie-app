// 5.3 + 4.6 : champ contrôlé par le parent — SearchBar n'a aucun state
export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="search"
      placeholder="Rechercher un film…"
      aria-label="Rechercher un film"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
