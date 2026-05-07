import {
  Navigate,
  useParams,
} from "react-router-dom";



import useDashboardData from "../hooks/useDashboardData";
import useAuth from "../hooks/useAuth";
import NotFoundPage from "./NotFoundPage";
import StatCard from "../components/StatCard/StatCard";
import { formatGender } from "../services/formatGender";

function ProfilePage() {
  const { userId } = useParams();

  const {
    userId: authUserId,
  } = useAuth();

  const {
    userInfo,
    profileActivity,
    loading,
    error,
  } = useDashboardData();

  if (userId !== authUserId) {
    return <NotFoundPage />;
  }

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!userInfo || !userInfo.profile) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  const profile =
    userInfo.profile;

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

  const age =
    profile.age ??
    "Non renseigné";

  const height =
    profile.height ??
    "Non renseigné";

  const weight =
    profile.weight ??
    "Non renseigné";

  const totalMinutes =
    profileActivity.reduce(
      (sum, item) =>
        sum +
        item.duration,
      0
    );

  const totalCalories =
    profileActivity.reduce(
      (sum, item) =>
        sum +
        (item.caloriesBurned ||
          0),
      0
    );

  const totalDistance =
    profileActivity.reduce(
      (sum, item) =>
        sum +
        item.distance,
      0
    );

  const sessionsCount =
    profileActivity.length;

  const statCards = [
    {
      label:
        "Temps total couru",
      main: `${Math.floor(
        totalMinutes / 60
      )}h`,
      unit: `${totalMinutes % 60}min`,
    },
    {
      label:
        "Calories brûlées",
      main: `${totalCalories}`,
      unit: "cal",
    },
    {
      label:
        "Distance totale parcourue",
      main: `${totalDistance.toFixed(
        1
      )}`,
      unit: "km",
    },
    {
      label:
        "Nombre de jours de repos",
      main: "9",
      unit: "jours",
    },
    {
      label:
        "Nombre de sessions",
      main: `${sessionsCount}`,
      unit: "sessions",
    },
  ];

  return (
    <main
      style={{
        width: "1140px",
        margin: "0 auto",
        transform:
          "translateX(-28px)",
        paddingTop: "75px",
        paddingBottom:
          "80px",
        boxSizing:
          "border-box",
      }}
    >
      <section
        style={{
          display: "flex",
          gap: "57px",
          alignItems:
            "flex-start",
        }}
      >
        {/* LEFT COLUMN */}
        <div
          style={{
            width: "508px",
            display: "flex",
            flexDirection:
              "column",
            gap: "16px",
          }}
        >
          {/* PROFILE CARD */}
          <div
            style={{
              width: "508px",
              height: "165px",
              padding:
                "24px 52px 24px 32px",
              borderRadius:
                "10px",
              background:
                "#FFFFFF",
              display: "flex",
              alignItems:
                "center",
              gap: "24px",
              boxSizing:
                "border-box",
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
                borderRadius:
                  "10px",
                objectFit:
                  "cover",
                flexShrink: 0,
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection:
                  "column",
                gap: "10px",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontFamily:
                    "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize:
                    "22px",
                  lineHeight:
                    "100%",
                  color:
                    "#111111",
                }}
              >
                {
                  profile.firstName
                }{" "}
                {
                  profile.lastName
                }
              </h2>

              <p
                style={{
                  margin: 0,
                  fontFamily:
                    "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize:
                    "14px",
                  lineHeight:
                    "100%",
                  color:
                    "#707070",
                }}
              >
                Membre depuis
                le {joinDate}
              </p>
            </div>
          </div>

          {/* DETAILS CARD */}
          <div
            style={{
              width: "508px",
              height: "328px",
              padding:
                "40px 28px",
              borderRadius:
                "10px",
              background:
                "#FFFFFF",
              boxSizing:
                "border-box",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontFamily:
                  "Inter, sans-serif",
                fontWeight: 500,
                fontSize:
                  "22px",
                lineHeight:
                  "100%",
                color:
                  "#111111",
              }}
            >
              Votre profil
            </h3>

            <div
              style={{
                width: "456px",
                height: "1px",
                background:
                  "#E5E5E5",
                margin:
                  "32px auto 32px",
              }}
            />

            <div
              style={{
                width: "355px",
                height: "148px",
                display: "flex",
                flexDirection:
                  "column",
                gap: "24px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily:
                    "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize:
                    "16px",
                  lineHeight:
                    "100%",
                  color:
                    "#707070",
                }}
              >
                Âge : {age}
              </p>

              <p
                style={{
                  margin: 0,
                  fontFamily:
                    "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize:
                    "16px",
                  lineHeight:
                    "100%",
                  color:
                    "#707070",
                }}
              >
                Genre : {formatGender(profile.gender)}              </p>

              <p
                style={{
                  margin: 0,
                  fontFamily:
                    "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize:
                    "16px",
                  lineHeight:
                    "100%",
                  color:
                    "#707070",
                }}
              >
                Taille :{" "}
                {typeof height ===
                  "number"
                  ? `${Math.floor(
                    height / 100
                  )}m${height % 100}`
                  : height}
              </p>

              <p
                style={{
                  margin: 0,
                  fontFamily:
                    "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize:
                    "16px",
                  lineHeight:
                    "100%",
                  color:
                    "#707070",
                }}
              >
                Poids : {weight}
                kg
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          style={{
            width: "575px",
          }}
        >
          {/* TITLE */}
          <div
            style={{
              display: "flex",
              flexDirection:
                "column",
              gap: "8px",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily:
                  "Inter, sans-serif",
                fontWeight: 500,
                fontSize:
                  "22px",
                lineHeight:
                  "100%",
                color:
                  "#111111",
              }}
            >
              Vos statistiques
            </h2>

            <p
              style={{
                margin: 0,
                fontFamily:
                  "Inter, sans-serif",
                fontWeight: 400,
                fontSize:
                  "14px",
                lineHeight:
                  "100%",
                color:
                  "#707070",
              }}
            >
              depuis le{" "}
              {joinDate}
            </p>
          </div>

          {/* CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(2, 278px)",
              gap: "19px",
              marginTop: "32px",
            }}
          >
            {statCards.map((card) => (
              <StatCard
                key={card.label}
                label={card.label}
                main={card.main}
                unit={card.unit}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProfilePage;