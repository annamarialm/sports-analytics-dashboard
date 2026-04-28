import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const users = [
    {
      username: "sophiemartin",
      password: "password123",
      userId: 12,
    },
    {
      username: "emmaleroy",
      password: "password789",
      userId: 18,
    },
    {
      username: "marcdubois",
      password: "password456",
      userId: 25,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const foundUser = users.find(
      (user) =>
        user.username === username &&
        user.password === password
    );

    if (!foundUser) {
      setError("Invalid credentials");
      return;
    }

    login("fake-jwt-token", foundUser.userId);

    navigate(`/dashboard/${foundUser.userId}`);
  };

  return (
    <div>
      <h1>Connexion</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) =>
            setUsername(event.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
        />

        <button type="submit">
          Se connecter
        </button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginPage;