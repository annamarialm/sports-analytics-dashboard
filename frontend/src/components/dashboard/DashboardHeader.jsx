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
      <div className="header-user">
        <img
          src={
            profile.profilePicture
          }
          alt={`${profile.firstName} ${profile.lastName}`}
          className="profile-image"
        />

        <div>
          <h2>
            {profile.firstName}{" "}
            {profile.lastName}
          </h2>

          <p>
            Membre depuis le{" "}
            {joinDate}
          </p>
        </div>
      </div>

      <div className="distance-box">
        <p>
          Distance totale
          parcourue
        </p>

        <strong>
          {
            stats.totalDistance
          }
          km
        </strong>
      </div>
    </section>
  );
}

export default DashboardHeader;