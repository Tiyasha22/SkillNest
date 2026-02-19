import React from "react";

const Card = ({ title, value, subtitle, icon, children }) => {
  return (
    <div className="group relative rounded-2xl p-px bg-linear-to-br from-purple-500 via-blue-500 to-cyan-300 hover:shadow-xl h-full group-hover:translate-y-1">
      <div className="bg-(--color-surface) border border-(--color-border) rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-(--color-muted)">{title}</h3>
          {icon && <span className="text-xl">{icon}</span>}
        </div>

        <p className="text-3xl font-bold text-(--color-text)">{value}</p>

        {subtitle && (
          <p className="text-sm text-(--color-muted) mt-2">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;
