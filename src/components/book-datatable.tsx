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
    total: "12,941,527.200",
  },
  {
    price: "13272",
    jml: "975.1",
    total: "12,941,527.200",
  },
  {
    price: "13272",
    jml: "975.1",
    total: "12,941,527.200",
  },
  {
    price: "13272",
    jml: "975.1",
    total: "12,941,527.200",
  },
  {
    price: "13272",
    jml: "975.1",
    total: "12,941,527.200",
  },
  {
    price: "13272",
    jml: "975.1",
    total: "12,941,527.200",
  },
  {
    price: "13272",
    jml: "975.1",
    total: "12,941,527.200",
  },
  {
    price: "13272",
    jml: "975.1",
    total: "12,941,527.200",
  },
  {
    price: "13272",
    jml: "975.1",
    total: "12,941,527.200",
  },
  {
    price: "13272",
    jml: "975.1",
    total: "12,941,527.200",
  },
  {
    price: "13272",
    jml: "975.1",
    total: "12,941,527.200",
  },
  {
    price: "13272",
    jml: "975.1",
    total: "12,941,527.200",
  },
  {
    price: "13272",
    jml: "975.1",
    total: "12,941,527.200",
  },
];

export default function BookDatatable() {
  return (
    <Card className="h-full dark:bg-slate-950">
      <CardHeader>
        <CardTitle>Buku Order</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Harga IDR</TableHead>
              <TableHead>Jumlah BTC</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((book, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-red-500">{book.price}</TableCell>
                <TableCell>{book.jml}</TableCell>
                <TableCell className="text-right">{book.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Harga IDR</TableHead>
              <TableHead>Jumlah BTC</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((book, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-emerald-500">{book.price}</TableCell>
                <TableCell>{book.jml}</TableCell>
                <TableCell className="text-right">{book.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
