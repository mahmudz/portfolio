/* eslint-disable */
import { useEffect, useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

export default function ActivityOverview({
  year,
}: {
  year: number | undefined;
}) {
  const [stats, setStats] = useState([]);

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
    <div>
      <RadarChart
        className="[&>svg]:outline-none"
        cx="50%"
        cy="50%"
        outerRadius="80%"
        width={400}
        height={280}
        data={stats}
      >
        <PolarGrid gridType="circle" stroke="#79cb5d" strokeWidth={2} />
        <PolarAngleAxis
          fill="white"
          dataKey="category"
          tick={({
            x = 0,
            y = 0,
            textAnchor,
            index,
            ...props
          }) => {
            const data = stats[index] as { category: string; value: number };

            return (
              <text
                x={x}
                y={index === 0 ? (Number(y) - 15) : (Number(y) + 5)}
                textAnchor={textAnchor}
                fontSize={13}
                fontWeight={500}
                {...props}
              >
                <tspan className="fill-muted-foreground">{data.category}</tspan>
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
          fill="#3b673a"
          stroke="#79cb5d"
          fillOpacity={0.9}
        />
      </RadarChart>
    </div>
  );
}
