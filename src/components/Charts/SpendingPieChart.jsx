import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#3B82F6", 
  "#22C55E", 
  "#F59E0B", 
  "#EF4444", 
  "#8B5CF6", 
  "#14B8A6", 
];

function SpendingPieChart({ pieData }) {
  return (
    <div className="h-[260px] w-full">

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>

          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip
            formatter={(value) => `₹${value.toLocaleString()}`}
            contentStyle={{
              backgroundColor: "#111827",
              borderRadius: "10px",
              border: "none",
            }}
          />

          <Legend />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}

export default SpendingPieChart;