import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import useAuth from "../hooks/useAuth";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] =
    useState("");
  const [password, setPassword] =
    useState("");
  const [error, setError] =
    useState("");
  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (
    event
  ) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const {
        token,
        userId,
      } = await loginUser(
        username,
        password
      );

      login(token, userId);

      navigate(
        `/dashboard/${userId}`
      );
    } catch {
      setError(
        "Identifiants invalides"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        width: "1440px",
        height: "1024px",
        margin: "0 auto",
        display: "flex",
        background: "#F2F3FF",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* LEFT SIDE */}
      <div
        style={{
          width: "632px",
          paddingLeft: "100px",
          paddingTop: "55px",
          boxSizing:
            "border-box",
        }}
      >
        {/* LOGO */}
        <img
          src="/Logo.svg"
          alt="Sportsee"
          style={{
            width: "157px",
            height: "auto",
            display: "block",
          }}
        />

        {/* CARD */}
        <div
          style={{
            width: "398px",
            height: "617px",
            marginTop: "151px",
            padding:
              "40px 40px 80px 40px",
            borderRadius:
              "20px",
            background:
              "#FFFFFF",
            display: "flex",
            flexDirection:
              "column",
            gap: "40px",
            boxSizing:
              "border-box",
          }}
        >
          {/* TEXT */}
          <div>
            <h1
              style={{
                margin: 0,
                marginBottom:
                  "40px",
                fontFamily:
                  "Inter, sans-serif",
                fontWeight: 600,
                fontSize:
                  "28px",
                lineHeight:
                  "100%",
                letterSpacing: 0,
                color:
                  "#0B23F4",
              }}
            >
              Transformez
              <br />
              vos stats en
              résultats
            </h1>

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
                letterSpacing: 0,
                color:
                  "#111111",
              }}
            >
              Se connecter
            </h2>
          </div>

          {/* FORM */}
          <form
            onSubmit={
              handleSubmit
            }
            style={{
              display:
                "flex",
              flexDirection:
                "column",
              gap: "24px",
            }}
          >
            <div>
              <label
                style={{
                  display:
                    "block",
                  marginBottom:
                    "8px",
                  fontFamily:
                    "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize:
                    "14px",
                  lineHeight:
                    "100%",
                  letterSpacing: 0,
                  color:
                    "#707070",
                }}
              >
                Adresse email
              </label>

              <input
                type="text"
                value={
                  username
                }
                onChange={(
                  event
                ) =>
                  setUsername(
                    event
                      .target
                      .value
                  )
                }
                style={{
                  width:
                    "317px",
                  height:
                    "58px",
                  borderRadius:
                    "10px",
                  border:
                    "0.5px solid #717171",
                  background:
                    "#FFFFFF",
                  padding:
                    "0 16px",
                  fontSize:
                    "14px",
                  outline:
                    "none",
                  boxSizing:
                    "border-box",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display:
                    "block",
                  marginBottom:
                    "8px",
                  fontFamily:
                    "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize:
                    "14px",
                  lineHeight:
                    "100%",
                  letterSpacing: 0,
                  color:
                    "#707070",
                }}
              >
                Mot de passe
              </label>

              <input
                type="password"
                value={
                  password
                }
                onChange={(
                  event
                ) =>
                  setPassword(
                    event
                      .target
                      .value
                  )
                }
                style={{
                  width:
                    "317px",
                  height:
                    "58px",
                  borderRadius:
                    "10px",
                  border:
                    "0.5px solid #717171",
                  background:
                    "#FFFFFF",
                  padding:
                    "0 16px",
                  fontSize:
                    "14px",
                  outline:
                    "none",
                  boxSizing:
                    "border-box",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={
                loading
              }
              style={{
                width:
                  "318px",
                height:
                  "51px",
                borderRadius:
                  "10px",
                background:
                  "#0B23F4",
                color:
                  "#FFFFFF",
                border:
                  "none",
                fontFamily:
                  "Inter, sans-serif",
                fontWeight: 500,
                fontSize:
                  "14px",
                cursor:
                  "pointer",
                transition:
                  "all 300ms ease-in",
              }}
            >
              {loading
                ? "Connexion..."
                : "Se connecter"}
            </button>

            {error && (
              <p
                style={{
                  margin: 0,
                  color:
                    "#F4320B",
                  fontSize:
                    "12px",
                }}
              >
                {error}
              </p>
            )}

            <p
              style={{
                margin: 0,
                marginTop:
                  "4px",
                fontFamily:
                  "Inter, sans-serif",
                fontWeight: 400,
                fontSize:
                  "14px",
                lineHeight:
                  "100%",
                letterSpacing: 0,
                textAlign:
                  "center",
                color:
                  "#111111",
              }}
            >
              Mot de passe
              oublié ?
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <img
        src="/Background picture.png"
        alt=""
        style={{
          width: "808px",
          height: "1024px",
          objectFit:
            "cover",
          display:
            "block",
        }}
      />

      {/* FLOATING INFO BUTTON */}
      <div
        style={{
          position:
            "absolute",
          right: "24px",
          bottom: "29px",
          width: "288px",
          height: "62px",
          padding: "16px",
          borderRadius:
            "50px",
          background:
            "#FFFFFF",
          color:
            "#0B23F4",
          fontFamily:
            "Inter, sans-serif",
          fontWeight: 400,
          fontSize:
            "12px",
          lineHeight:
            "100%",
          letterSpacing: 0,
          textAlign:
            "center",
          display: "flex",
          alignItems:
            "center",
          justifyContent:
            "center",
          boxSizing:
            "border-box",
        }}
      >
        Analysez vos
        performances en un
        clin d’œil,
        <br />
        suivez vos progrès
        et atteignez vos
        objectifs.
      </div>
    </section>
  );
}

export default LoginPage;