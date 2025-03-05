"use client";

import React from "react";

import dynamic from "next/dynamic";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { data } from "@/data";
import { useTheme } from "next-themes";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function CandleStick() {
  const { theme } = useTheme(); // Mengambil tema saat ini

  const isDarkMode = theme === "dark";

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "candlestick",
      height: 300,
    },
    title: {
      text: "",
      align: "left",
      style: {
        color: isDarkMode ? "#FFFFFF" : "#000000",
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      opposite: true,
      tooltip: {
        enabled: false,
      },
    },
  };

  const series = [
    {
      data: data,
    },
  ];

  const chartData = [
    { data: "09:00", pv: 186, uv: 80 },
    { data: "12:00", pv: 305, uv: 200 },
    { data: "15:00", pv: 237, uv: 120 },
    { data: "18:00", pv: 73, uv: 190 },
    { data: "21:00", pv: 209, uv: 130 },
    { data: "00:00", pv: 214, uv: 140 },
    { data: "03:00", pv: 120, uv: 120 },
    { data: "06:00", pv: 80, uv: 190 },
    { data: "09:00", pv: 186, uv: 80 },
    { data: "12:00", pv: 305, uv: 200 },
    { data: "15:00", pv: 237, uv: 120 },
    { data: "18:00", pv: 73, uv: 190 },
    { data: "21:00", pv: 209, uv: 130 },
    { data: "00:00", pv: 214, uv: 140 },
    { data: "03:00", pv: 120, uv: 120 },
  ];

  const chartConfig = {
    pv: {
      label: "pv",
      color: "green",
    },
    uv: {
      label: "uv",
      color: "red",
    },
  } satisfies ChartConfig;

  return (
    <Card className="overflow-hidden dark:bg-slate-950">
      <CardHeader className="dark:bg-gray-700 -mt-6 pt-4 flex flex-row justify-between">
        <div className="flex gap-2">
          <p>Waktu</p>
          <p className="hidden md:block">15M</p>
          <p className="hidden md:block">1J</p>
          <p className="hidden md:block">4J</p>
          <p className="hidden md:block">1H</p>
          <p className="hidden md:block">1M</p>
        </div>

        <div className="flex gap-2 ">
          <p>Asli</p>
          <p>Trading View</p>
          <p>Kedalaman</p>
        </div>
      </CardHeader>
      <CardDescription className="dark:bg-gray-700 -mt-6 px-6 py-3 flex flex-col lg:flex-row justify-between gap-1 lg:gap-4">
        <p>2025/02/05</p>
        <p>
          Buka: <span className="text-emerald-500">12227</span>
        </p>
        <p>
          Tinggi: <span className="text-emerald-500">12412</span>
        </p>
        <p>
          Rendah: <span className="text-emerald-500">12072</span>
        </p>
        <p>
          Tutup: <span className="text-emerald-500">12323</span>
        </p>
        <p>
          Perubahan: <span className="text-emerald-500">0.19%</span>
        </p>
        <p>
          Amplitudo: <span className="text-emerald-500">2.76%</span>
        </p>
      </CardDescription>
      <CardContent>
        <ApexChart
          type="candlestick"
          options={options}
          series={series}
          height={300}
          width={"100%"}
        />
        <ChartContainer config={chartConfig} className="h-[140px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="data"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <YAxis
              orientation="right"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="pv" fill="var(--color-pv)" radius={4} />
            <Bar dataKey="uv" fill="var(--color-uv)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
