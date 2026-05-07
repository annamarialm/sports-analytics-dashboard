import "./StatCard.css";

function StatCard({
  label,
  main,
  unit,
}) {
  return (
    <div className="stat-card">
      <p className="stat-card__label">
        {label}
      </p>

      <div className="stat-card__value-group">
        <span className="stat-card__main">
          {main}
        </span>

        <span className="stat-card__unit">
          {unit}
        </span>
      </div>
    </div>
  );
}

export default StatCard;