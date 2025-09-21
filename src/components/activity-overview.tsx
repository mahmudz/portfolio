/* eslint-disable */
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function ActivityOverview({
  year,
}: {
  year: number | undefined;
}) {
  const [stats, setStats] = useState([]);
  const {theme} = useTheme();

  const fetchStats = async () => {
    const params = new URLSearchParams();

    if (year) {
      params.set("from", `${year}-01-01`);
      params.set("to", `${year}-12-01`);
    }

    const response = await fetch(`/api/github-stats?${params.toString()}`).then(
      (r) => r.json()
    );

    setStats(response);
  };

  useEffect(() => {
    fetchStats();
  }, [year]);

  return (
    <ResponsiveContainer width={320} height={280}>
      <RadarChart
        className="[&>svg]:outline-none"
        cx="50%"
        cy="50%"
        outerRadius="70%"
        data={stats}
      >
        <PolarGrid gridType="circle" stroke="#79cb5d" strokeWidth={2} />
        <PolarAngleAxis
          dataKey="category"
          tick={({ x = 0, y = 0, textAnchor, index, ...props }) => {
            const data = stats[index] as { category: string; value: number };

            return (
              <text
                x={x}
                y={index === 0 ? Number(y) - 15 : Number(y) + 5}
                textAnchor={textAnchor}
                fontSize={13}
                fontWeight={500}
                {...props}
              >
                <tspan className="fill-gray-800 dark:fill-white">{data.category}</tspan>
                <tspan
                  x={x}
                  dy={"1rem"}
                  fontSize={12}
                  className="fill-muted-foreground text-center"
                >
                  {data.value}%
                </tspan>
              </text>
            );
          }}
        />
        <Radar
          dot={{
            fill: "white",
          }}
          label="string"
          name="Contributions"
          dataKey="value"
          fill={theme === 'dark' ? "#3b673a" : "#88c257"}
          stroke="#79cb5d"
          strokeWidth={2}
          fillOpacity={theme === 'dark' ? 0.9 : 0.4}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
