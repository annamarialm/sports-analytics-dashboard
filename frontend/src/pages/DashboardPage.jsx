import DashboardHeader from "../components/dashboard/DashboardHeader";
import PerformanceSection from "../components/dashboard/PerformanceSection";
import WeeklySection from "../components/dashboard/WeeklySection";

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <DashboardHeader />

      <PerformanceSection />

      <WeeklySection />
    </div>
  );
}

export default DashboardPage;