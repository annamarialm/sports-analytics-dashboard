import { useEffect, useState } from "react";
import { getUserById } from "../services/api";

function useUserData(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);

        const data = await getUserById(userId);

        if (!data) {
          throw new Error("User not found");
        }

        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]);

  return { user, loading, error };
}

export default useUserData;