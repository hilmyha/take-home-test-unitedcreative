import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

const data = [
  {
    pasangan: "ADA/IDR",
    harga: "12,501",
    ubah: "+3.00%",
  },
  {
    pasangan: "ARB/IDR",
    harga: "8,125",
    ubah: "+2.00%",
  },
  {
    pasangan: "AVAX/IDR",
    harga: "439,245",
    ubah: "+1.00%",
  },
  {
    pasangan: "DOGE/IDR",
    harga: "4,361",
    ubah: "+5.00%",
  },
  {
    pasangan: "ETH/IDR",
    harga: "46,000,000",
    ubah: "-3.00%",
  },
  {
    pasangan: "MANTA/IDR",
    harga: "24,4",
    ubah: "-1.00%",
  },
  {
    pasangan: "NBT/IDR",
    harga: "48.8",
    ubah: "-2.30%",
  },
  {
    pasangan: "NOT/IDR",
    harga: "975.1",
    ubah: "+3.00%",
  },
  {
    pasangan: "SOL/IDR",
    harga: "975.1",
    ubah: "+3.00%",
  },
];

export default function RateDatatable() {
  return (
    <Card className="dark:bg-slate-950">
      <CardHeader>
        <CardTitle>
          <Input placeholder="Cari" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Harga IDR</TableHead>
              <TableHead>Jumlah BTC</TableHead>
              <TableHead className="text-right">ubah</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((rate, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{rate.pasangan}</TableCell>
                <TableCell>{rate.harga}</TableCell>
                <TableCell className={
                    parseFloat(rate.ubah.replace("%", "")) >= 0
                      ? `text-right text-emerald-400`
                      : `text-right text-red-500`
                  }>{rate.ubah}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
