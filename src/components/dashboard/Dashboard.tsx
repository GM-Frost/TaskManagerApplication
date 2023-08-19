import DashboardInfo from "./layout/DashboardInfo";
import DashboardStatsGrid from "./layout/DashboardStatsGrid";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <DashboardStatsGrid />
        <div className="flex flex-row w-full">
          <DashboardInfo />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
