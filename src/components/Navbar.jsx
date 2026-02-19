import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium text-center transition-colors duration-200 ${
      isActive
        ? "text-(--color-brand-primary)"
        : "text-(--color-text-muted) hover:text-(--color-text)"
    }`;
  return (
    <header className="h-16 border-b bg-(--color-surface">
      <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        <h1 className="text-lg font-semibold">SkillNest</h1>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/courses" className={navLinkClass}>
            Courses
          </NavLink>
          <NavLink to="/profile" className={navLinkClass}>
            Profile
          </NavLink>
          <ThemeToggle />
        </nav>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-md hover:bg-(--color-border) transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? "ⅹ" : "☰"}
        </button>
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-(--color-surface) border-b shadow-sm transition-all duration-400 ease-in-out origin-top
    ${isOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"}
  `}
        >
          <nav className="flex flex-col items-center gap-4 px-6 py-6">
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/courses"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Courses
            </NavLink>
            <NavLink
              to="/profile"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Profile
            </NavLink>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
