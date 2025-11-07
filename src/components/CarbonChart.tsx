import { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockCarbonData } from "@/data/mockData";

type TimeFilter = "week" | "month" | "year";
type ChartType = "line" | "bar";

const CarbonChart = () => {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("month");
  const [chartType, setChartType] = useState<ChartType>("line");

  // In a real app, this would filter based on the selected time period
  const chartData = mockCarbonData;

  return (
    <Card className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold">Carbon Footprint Over Time</h3>
          <p className="text-sm text-muted-foreground">
            Track your environmental impact
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant={timeFilter === "week" ? "default" : "outline"}
            onClick={() => setTimeFilter("week")}
          >
            Week
          </Button>
          <Button
            size="sm"
            variant={timeFilter === "month" ? "default" : "outline"}
            onClick={() => setTimeFilter("month")}
          >
            Month
          </Button>
          <Button
            size="sm"
            variant={timeFilter === "year" ? "default" : "outline"}
            onClick={() => setTimeFilter("year")}
          >
            Year
          </Button>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <Button
          size="sm"
          variant={chartType === "line" ? "default" : "ghost"}
          onClick={() => setChartType("line")}
        >
          Line Chart
        </Button>
        <Button
          size="sm"
          variant={chartType === "bar" ? "default" : "ghost"}
          onClick={() => setChartType("bar")}
        >
          Bar Chart
        </Button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        {chartType === "line" ? (
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="date"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              label={{
                value: "kg CO₂",
                angle: -90,
                position: "insideLeft",
                style: { fill: "hsl(var(--muted-foreground))" },
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Line
              type="monotone"
              dataKey="carbon"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--primary))", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        ) : (
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="date"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              label={{
                value: "kg CO₂",
                angle: -90,
                position: "insideLeft",
                style: { fill: "hsl(var(--muted-foreground))" },
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Bar dataKey="carbon" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
          </BarChart>
        )}
      </ResponsiveContainer>
    </Card>
  );
};

export default CarbonChart;
