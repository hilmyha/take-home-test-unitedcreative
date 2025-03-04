"use client";

import { CartesianGrid, Line, LineChart } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

interface LineChartProps {
  data?: { up: string; data: number }[];
  color?: string;
}

export function LineCharts({ data, color }: LineChartProps) {
  const chartConfig = {
    data: {
      label: "data",
      color: color,
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="w-full">
      <LineChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <Line dataKey="data" fill={color} stroke={color} radius={0} />
      </LineChart>
    </ChartContainer>
  );
}
