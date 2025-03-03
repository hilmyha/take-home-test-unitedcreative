import { BarCharts } from "@/components/bar-charts";
import Section from "@/components/section";
import React from "react";

export default function page() {
  return (
    <>
      <Section className="border px-5 flex items-center justify-between">
        <div className="">
          <h2 className="font-semibold text-2xl">Welcome John Doe</h2>
          <p className="text-sm text-muted-foreground">how are you today?</p>
        </div>
        <p>Dashboard</p>
      </Section>
      <Section className="border px-5 grid grid-cols-1 lg:grid-cols-2">
        <BarCharts />
        <div className="border grid grid-cols-2">
          <div className="border"></div>
          <div className="border"></div>
          <div className="border"></div>
          <div className="border"></div>
        </div>
      </Section>
    </>
  );
}
