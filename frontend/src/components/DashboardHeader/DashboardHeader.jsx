import "./DashboardHeader.css";

function DashboardHeader({
  userInfo,
}) {
  const profile =
    userInfo.profile;

  const stats =
    userInfo.statistics;

  const joinDate =
    new Date(
      profile.createdAt
    ).toLocaleDateString(
      "fr-FR",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

  return (
    <section className="dashboard-header">
      {/* LEFT SIDE */}
      <div className="dashboard-header__left">
        <img
          src={
            profile.profilePicture
          }
          alt={`${profile.firstName} ${profile.lastName}`}
          className="dashboard-header__image"
        />

        <div className="dashboard-header__user-info">
          <h2 className="dashboard-header__name">
            {profile.firstName}{" "}
            {profile.lastName}
          </h2>

          <p className="dashboard-header__join-date">
            Membre depuis le{" "}
            {joinDate}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="dashboard-header__right">
        <p className="dashboard-header__label">
          Distance totale parcourue
        </p>

        <div className="dashboard-header__distance-card">
          <span className="dashboard-header__distance-value">
            {stats.totalDistance} km
          </span>
        </div>
      </div>
    </section>
  );
}

export default DashboardHeader;