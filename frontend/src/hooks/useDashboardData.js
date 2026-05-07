import { useEffect, useState } from "react";

import { getUserInfo }
  from "../api/userApi";

import { getUserActivity }
  from "../api/activityApi";


import useAuth from "./useAuth";

function useDashboardData() {
  const { token } = useAuth();

  const [userInfo, setUserInfo] =
    useState(null);

  const [
    monthlyActivity,
    setMonthlyActivity,
  ] = useState([]);

  const [
    weeklyActivity,
    setWeeklyActivity,
  ] = useState([]);

  const [
    profileActivity,
    setProfileActivity,
  ] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const info =
          await getUserInfo(token);

        const monthlySessions =
          await getUserActivity(
            token,
            "2025-06-01",
            "2025-06-30"
          );

        const weeklySessions =
          await getUserActivity(
            token,
            "2025-06-23",
            "2025-06-30"
          );

        const profileSessions =
          await getUserActivity(
            token,
            info.profile.createdAt,
            "2025-12-31"
          );

        setUserInfo(info);

        setMonthlyActivity(
          monthlySessions
        );

        setWeeklyActivity(
          weeklySessions
        );

        setProfileActivity(
          profileSessions
        );
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
    monthlyActivity,
    weeklyActivity,
    profileActivity,
    loading,
    error,
  };
}

export default useDashboardData;