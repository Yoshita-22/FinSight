import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

function BalanceLineChart({ data }) {
  return (
    <div className="h-[260px] w-full">

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>

          {/* GRID */}
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />

          {/* X AXIS */}
          <XAxis
            dataKey="month"
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
          />

          {/* Y AXIS */}
          <YAxis
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
          />

          {/* TOOLTIP */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#111827",
              border: "none",
              borderRadius: "10px",
            }}
          />

          {/* LEGEND */}
          <Legend />

          {/* LINES */}
          <Line
            type="monotone"
            dataKey="income"
            stroke="#22C55E"
            strokeWidth={2}
          />

          <Line
            type="monotone"
            dataKey="expense"
            stroke="#EF4444"
            strokeWidth={2}
          />

          <Line
            type="monotone"
            dataKey="balance"
            stroke="#3B82F6"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default BalanceLineChart;