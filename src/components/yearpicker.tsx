"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, CalendarIcon } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export function YearPicker({ selectedYear, onChange }: { selectedYear: number, onChange: (year: number) => void }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full lg:w-fit justify-start text-left font-normal">
          <CalendarIcon className="mr-2" />
          {selectedYear}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4">
        <div className="flex items-center justify-between mb-2">
          <Button variant="ghost" size="icon" onClick={() => onChange(selectedYear - 1)}>
            <ChevronLeft />
          </Button>
          <span className="font-medium">{selectedYear}</span>
          <Button variant="ghost" size="icon" onClick={() => onChange(selectedYear + 1)}>
            <ChevronRight />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
