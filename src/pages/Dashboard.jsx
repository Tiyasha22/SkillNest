import React from "react";

import Card from "../components/ui/Cards";
import ChartCard from "../components/ChartCard";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      {/* Stat Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          title="Total Courses"
          value="12"
          subtitle="3 new this week"
          icon="📚"
        />
        <Card title="In Progress" value="5" subtitle="Keep going!" icon="⏳" />
        <Card title="Completed" value="7" subtitle="Great job!" icon="✅" />
        <Card
          title="Progress"
          value="58%"
          subtitle="Overall completion"
          icon="📈"
        />
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard />
        {/* Later → ProgressCard */}
      </div>
    </div>
  );
};

export default Dashboard;
