import { BarCharts } from "@/components/bar-charts";
import CardInfo from "@/components/card-info";
import DatePicker from "@/components/datepicker";
import Section from "@/components/section";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function page() {
  return (
    <>
      <Section className="px-5 flex lg:flex-row flex-col lg:items-center justify-between">
        <div>
          <h2 className="font-semibold text-2xl">Welcome John Doe</h2>
          <p className="text-sm text-muted-foreground">how are you today?</p>
        </div>
        <div className="flex items-center gap-4">
          <p>Filter by</p>
          <DatePicker />
        </div>
      </Section>
      <Section className="px-5 gap-4 grid grid-cols-1 xl:grid-cols-2">
        <BarCharts />
        <div className="gap-4 grid grid-cols-1 xl:grid-cols-2">
          <CardInfo
            title="Total Deposit"
            nominals="IDR 0.00"
            status="0 Deposit(s)"
          />
          <CardInfo
            title="Total Withdraw"
            nominals="IDR 0.00"
            status="0 Withdraw(s)"
          />
          <CardInfo title="Total Verified KYC" status="0 Verified" />
          <CardInfo title="Total Registration" status="0 Registered" />
        </div>
      </Section>
    </>
  );
}
