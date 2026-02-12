import React from "react";
import useTheme from "../hooks/useTheme";
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-12.5 h-12.5 rounded-full bg-(--color-surface) border flex items-center justify-center hover:bg-(--color-border) transition-all duration-300 ease-in-out active:scale-90"
    >
      <span
        className={`text-xl transition-transform duration-300 ${
          theme === "light" ? "rotate-0" : "rotate-180"
        }`}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </span>
    </button>
  );
};

export default ThemeToggle;
