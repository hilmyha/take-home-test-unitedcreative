import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";

const data = [
  {
    price: "13272",
    jml: "975.1",
    waktu: "11.00.12",
  },
  {
    price: "13272",
    jml: "975.1",
    waktu: "10.50.12",
  },
  {
    price: "13272",
    jml: "975.1",
    waktu: "10.20.12",
  },
  {
    price: "13272",
    jml: "975.1",
    waktu: "10.10.12",
  },
  {
    price: "13272",
    jml: "975.1",
    waktu: "09.50.12",
  },
  {
    price: "13272",
    jml: "975.1",
    waktu: "09.49.12",
  },
  {
    price: "13272",
    jml: "975.1",
    waktu: "09.20.12",
  },
  {
    price: "13272",
    jml: "975.1",
    waktu: "09.00.12",
  },
  {
    price: "13272",
    jml: "975.1",
    waktu: "08.50.12",
  },
];

export default function MarketDatatable() {
  return (
    <Card className="dark:bg-slate-950">
      <CardHeader>
        <CardTitle>Perdagangan Market</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Harga IDR</TableHead>
              <TableHead>Jumlah BTC</TableHead>
              <TableHead className="text-right">Waktu</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((book, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{book.price}</TableCell>
                <TableCell>{book.jml}</TableCell>
                <TableCell className="text-right">{book.waktu}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
