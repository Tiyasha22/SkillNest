import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-(--color-brand-primary) text-white"
        : "hover:bg-(--color-muted)"
    }`;

  return (
    <aside className="hidden md:flex flex-col w-64 min-h-screen bg-(--color-surface) border-r border-(--color-border) p-6 transition-all duration-300">
      <h2 className="text-xl font-semibold mb-8">Navigation</h2>

      <nav className="flex flex-col gap-4">
        <NavLink to="/" className={navLinkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/courses" className={navLinkClass}>
          Courses
        </NavLink>

        <NavLink to="/profile" className={navLinkClass}>
          Profile
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
