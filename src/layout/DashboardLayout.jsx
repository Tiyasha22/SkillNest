import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-(--color-bg) text-(--color-text)">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 bg-(--color-surface)">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
