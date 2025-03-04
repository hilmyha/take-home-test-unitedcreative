"use client";

import { Bar, BarChart, CartesianGrid, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", trade: 186 },
  { month: "February", trade: 305 },
  { month: "March", trade: 237 },
  { month: "April", trade: 459 },
  { month: "May", trade: 209 },
  { month: "June", trade: 214 },
  { month: "July", trade: 658 },
  { month: "August", trade: 512 },
  { month: "September", trade: 325 },
  { month: "October", trade: 444 },
  { month: "November", trade: 98 },
  { month: "December", trade: 120 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "oklch(0.696 0.17 162.48)",
  },
  mobile: {
    label: "Mobile",
    color: "oklch(0.696 0.17 162.48)",
  },
} satisfies ChartConfig;

export function BarCharts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />

            <YAxis
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="trade" fill="var(--color-desktop)" radius={100} />
            {/* <Bar dataKey="mobile" fill="var(--color-mobile)" radius={0} /> */}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
