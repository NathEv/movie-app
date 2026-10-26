import RatingBadge from "./RatingBadge.jsx";

// 3.3 : les données arrivent en props ; 4.6 : aucun state, la carte signale le clic au parent
export default function MovieCard({ title, year, rating, posterUrl, description, isLiked, onToggleLike }) {
  return (
    <article className="movie-card">
      {/* 5.1 : un film ajouté par le formulaire n'a pas d'affiche */}
      {posterUrl ? (
        <img src={posterUrl} alt={`Affiche du film ${title}`} />
      ) : (
        <div className="poster-placeholder">{title}</div>
      )}
      <h3>{title}</h3>
      <p>
        {year} <RatingBadge rating={rating} />
      </p>
      <p>{description}</p>
      <button type="button" onClick={onToggleLike} aria-pressed={isLiked}>
        {isLiked ? "❤️" : "🤍"}
      </button>
    </article>
  );
}
