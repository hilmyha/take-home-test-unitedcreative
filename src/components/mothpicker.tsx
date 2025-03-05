"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const months = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

export function MonthPicker({ selectedMonth, onChange }: { selectedMonth: number, onChange: (month: number) => void }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[180px] justify-start text-left font-normal">
          <CalendarIcon className="mr-2" />
          {months[selectedMonth]}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4">
        <div className="grid grid-cols-3 gap-2">
          {months.map((month, index) => (
            <Button
              key={index}
              variant={index === selectedMonth ? "default" : "outline"}
              className="w-full"
              onClick={() => onChange(index)}
            >
              {month.slice(0, 3)}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
