import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import useAuth from "../hooks/useAuth";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const { token, userId } =
        await loginUser(username, password);

      login(token, userId);

      navigate(`/dashboard/${userId}`);
    } catch {
      setError("Identifiants invalides");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Connexion</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(event) =>
            setUsername(event.target.value)
          }
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
        />

        <button type="submit" disabled={loading}>
          {loading
            ? "Connexion..."
            : "Se connecter"}
        </button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginPage;