"use client";

import React from "react";

import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader } from "./ui/card";
import { data } from "@/app/dashboard/member/data";
import { useTheme } from "next-themes";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function CandleStick() {
  const { theme } = useTheme(); // Mengambil tema saat ini

  const isDarkMode = theme === "dark";

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "candlestick",
      height: 500,
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

  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent>
        <ApexChart
          type="candlestick"
          options={options}
          series={series}
          height={500}
          width={"100%"}
        />
      </CardContent>
    </Card>
  );
}
