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
    <section
      style={{
        width: "1052px",
        height: "181px",
        display: "flex",
        justifyContent:
          "space-between",
        alignItems: "center",
        padding:
          "32px 52px",
        borderRadius:
          "20px",
        background:
          "linear-gradient(0deg, rgba(255,255,255,0) -8.38%, #FFFFFF 100%)",
        boxSizing:
          "border-box",
      }}
    >
      {/* LEFT SIDE */}
      <div
        style={{
          width: "345px",
          height: "117px",
          display: "flex",
          alignItems:
            "center",
          gap: "38px",
        }}
      >
        <img
          src={
            profile.profilePicture
          }
          alt={`${profile.firstName} ${profile.lastName}`}
          style={{
            width: "104px",
            height: "117px",
            objectFit:
              "cover",
            borderRadius:
              "10px",
          }}
        />

        <div
          style={{
            width: "203px",
            height: "48px",
            display: "flex",
            flexDirection:
              "column",
            gap: "4px",
            justifyContent:
              "center",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize:
                "22px",
              fontWeight: 500,
              color:
                "#111111",
              lineHeight: 1,
            }}
          >
            {profile.firstName}{" "}
            {profile.lastName}
          </h2>

          <p
            style={{
              margin: 0,
              fontSize:
                "14px",
              fontWeight: 400,
              color:
                "#707070",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            Membre depuis le{" "}
            {joinDate}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            fontWeight: 400,
            color: "#707070",
            whiteSpace: "nowrap",
          }}
        >
          Distance totale parcourue
        </p>

        <div
          style={{
            width: "208px",
            height: "103px",
            borderRadius: "14px",
            background: "#0B23F4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: "#FFFFFF",
              fontSize: "30px",
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            {stats.totalDistance} km
          </span>
        </div>
      </div>
    </section>
  );
}

export default DashboardHeader;