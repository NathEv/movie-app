// Application 3 : badge--good si ≥ 8, badge--bad si < 5, sinon badge seul
export default function RatingBadge({ rating }) {
  let className = "badge";
  if (rating >= 8) className = "badge badge--good";
  else if (rating < 5) className = "badge badge--bad";

  return <span className={className}>★ {rating}</span>;
}
