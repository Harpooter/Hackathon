"use client";

import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";

interface MedicineChartProps {
  data: {
    name: string;
    usage: number;
  }[];
}

const COLORS = ["#2563eb", "#06b6d4", "#10b981", "#f59e0b", "#ef4444"];

export function MedicineChart({ data }: MedicineChartProps) {
  return (
    <div className="h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="usage"
            nameKey="name"
            outerRadius={110}
            innerRadius={70}
            paddingAngle={4}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}