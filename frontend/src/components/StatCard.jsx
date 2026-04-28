function StatCard({ label, value }) {
  return (
    <article>
      <h3>{label}</h3>
      <p>{value}</p>
    </article>
  );
}

export default StatCard;