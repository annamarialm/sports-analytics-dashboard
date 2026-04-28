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
    <div className="dashboard-page">
      <DashboardHeader
        userInfo={userInfo}
      />

      <PerformanceSection
        activity={activity}
      />

      <WeeklySection
        activity={activity}
      />
    </div>
  );
}

export default DashboardPage;