import { useState } from "react";
import { movies as initialMovies } from "./data/movies.js"; // « as » : renommé à l'import
import Panel from "./components/Panel.jsx";
import SearchBar from "./components/SearchBar.jsx";
import MovieList from "./components/MovieList.jsx";
import AddMovieForm from "./components/AddMovieForm.jsx";

// Jusqu'à l'application 6, tout le state vit dans App : c'est le parent commun
// de la recherche, du compteur, de la grille et du formulaire (4.6).
export default function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [likedIds, setLikedIds] = useState([]);
  const [query, setQuery] = useState("");

  function toggleLike(id) {
    setLikedIds((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]));
  }

  // 4.5 : nouveau tableau, jamais de push
  function addMovie(movie) {
    setMovies((list) => [...list, movie]);
  }

  // 4.7 et 5.2 : données dérivées, recalculées à chaque rendu
  const q = query.trim().toLowerCase();
  const visible = movies.filter((m) => m.title.toLowerCase().includes(q));
  const likedCount = likedIds.length;

  return (
    <>
      <Panel title="Catalogue">
        <div className="toolbar">
          <SearchBar value={query} onChange={setQuery} />
          <span>
            {likedCount} film{likedCount > 1 ? "s" : ""} aimé{likedCount > 1 ? "s" : ""}
          </span>
        </div>

        {/* 5.1 : length > 0, pas length seul (sinon 0 s'affiche) */}
        {visible.length > 0 ? (
          <MovieList movies={visible} likedIds={likedIds} onToggleLike={toggleLike} />
        ) : (
          <p className="empty">Aucun film ne correspond à « {query} »</p>
        )}
      </Panel>

      <Panel title="Ajouter un film">
        <AddMovieForm onAdd={addMovie} />
      </Panel>
    </>
  );
}
