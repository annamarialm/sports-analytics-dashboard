import DashboardHeader from "../components/dashboard/DashboardHeader";
import PerformanceSection from "../components/dashboard/PerformanceSection";
import WeeklySection from "../components/dashboard/WeeklySection";
import useDashboardData from "../hooks/useDashboardData";

function DashboardPage() {
  const {
    userInfo,
    activity,
    loading,
    error,
  } = useDashboardData();

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main
      style={{
        width: "1140px",
        margin: "0 auto",
        paddingTop: "75px",
        paddingBottom: "80px",
        display: "flex",
        flexDirection: "column",
        gap: "108px",
        boxSizing: "border-box",
      }}
    >
      <DashboardHeader
        userInfo={userInfo}
      />

      <PerformanceSection
        activity={activity}
      />

      <WeeklySection
        activity={activity}
      />
    </main>
  );
}

export default DashboardPage;