import { useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useTimeline } from "../context/TimelineContext";

const COLORS = { Text: "#8b5cf6", Call: "#1f2937", Video: "#2d8f63" };

export default function Stats() {
  const { entries } = useTimeline();

  const data = useMemo(() => {
    const counts = { Text: 0, Call: 0, Video: 0 };
    entries.forEach((e) => {
      if (e.type === "call") counts.Call += 1;
      else if (e.type === "text") counts.Text += 1;
      else if (e.type === "video") counts.Video += 1;
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [entries]);

  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl font-extrabold text-gray-900 animate-fade-in-up">Friendship Analytics</h1>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mt-6 animate-pop-in" style={{ animationDelay: "0.08s" }}>
        <p className="font-bold text-gray-900 text-sm mb-2">By Interaction Type</p>
        {total === 0 ? (
          <p className="text-center text-gray-400 py-16 text-sm">No interactions logged yet.</p>
        ) : (
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={72}
                  outerRadius={104}
                  paddingAngle={5}
                  strokeWidth={0}
                >
                  {data.map((entry) => (
                    <Cell key={entry.name} fill={COLORS[entry.name]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  iconSize={8}
                  formatter={(value) => <span className="text-xs text-gray-600">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}
