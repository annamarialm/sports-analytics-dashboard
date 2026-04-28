import { useEffect, useState } from "react";
import {
  getUserInfo,
  getUserActivity,
} from "../services/api";
import useAuth from "./useAuth";

function useDashboardData() {
  const { token } = useAuth();

  const [userInfo, setUserInfo] =
    useState(null);

  const [activity, setActivity] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const info =
          await getUserInfo(token);

        const sessions =
          await getUserActivity(
            token,
            "2025-06-01",
            "2025-06-30"
          );

        setUserInfo(info);
        setActivity(sessions);
      } catch {
        setError(
          "Impossible de charger les données"
        );
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [token]);

  return {
    userInfo,
    activity,
    loading,
    error,
  };
}

export default useDashboardData;