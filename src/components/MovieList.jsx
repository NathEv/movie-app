import MovieCard from "./MovieCard.jsx";

// 3.5 : map + key (l'id du film, jamais l'index)
// 4.6 : la donnée descend (isLiked), la demande remonte (onToggleLike)
export default function MovieList({ movies, likedIds, onToggleLike }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          {...movie}
          isLiked={likedIds.includes(movie.id)}
          onToggleLike={() => onToggleLike(movie.id)}
        />
      ))}
    </div>
  );
}
