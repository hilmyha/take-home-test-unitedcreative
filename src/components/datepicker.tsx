"use client";

import * as React from "react";
import { MonthPicker } from "./mothpicker";
import { YearPicker } from "./yearpicker";

export default function DatePicker() {
  const [month, setMonth] = React.useState<number>(new Date().getMonth());
  const [year, setYear] = React.useState<number>(new Date().getFullYear());

  return (
    <div className="flex space-x-2">
      <MonthPicker selectedMonth={month} onChange={setMonth} />
      <YearPicker selectedYear={year} onChange={setYear} />
    </div>
  );
}
