import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "../components/ui/Cards";

const data = [
  { day: "Mon", hours: 1 },
  { day: "Tue", hours: 2 },
  { day: "Wed", hours: 1.5 },
  { day: "Thu", hours: 3 },
  { day: "Fri", hours: 2.5 },
  { day: "Sat", hours: 4 },
  { day: "Sun", hours: 3 },
];

const ChartCard = () => {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">Learning Activity</h3>

      <div className="w-full h-62.5">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="day"
              stroke="var(--color-text)"
              tick={{ fontSize: 12 }}
            />

            <YAxis stroke="var(--color-text)" tick={{ fontSize: 12 }} />

            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "12px",
              }}
            />

            <Line
              type="monotone"
              dataKey="hours"
              stroke="var(--color-brand-primary)"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ChartCard;
