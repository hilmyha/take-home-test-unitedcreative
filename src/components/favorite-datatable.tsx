"use client";

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
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";

const data = [
  {
    pasangan: "BTC/DAI",
    ht: "98,832.93 / Rp 1,612,213,281.72",
    p24: "+3.89%",
    tt24: "102,451.34 / Rp 94,288.07",
    kp: "Rp 31,953.008T",
    vol: "1.538M",
    favorite: true,
  },
  {
    pasangan: "BTC/DAI",
    ht: "98,832.93 / Rp 1,612,213,281.72",
    p24: "+3.89%",
    tt24: "102,451.34 / Rp 94,288.07",
    kp: "Rp 31,953.008T",
    vol: "1.538M",
    favorite: false,
  },
  {
    pasangan: "XRP/ETH",
    ht: "98,832.93 / Rp 1,612,213,281.72",
    p24: "-3.89%",
    tt24: "102,451.34 / Rp 94,288.07",
    kp: "Rp 31,953.008T",
    vol: "1.538M",
    favorite: false,
  },
  {
    pasangan: "BTC/DAI",
    ht: "98,832.93 / Rp 1,612,213,281.72",
    p24: "+3.89%",
    tt24: "102,451.34 / Rp 94,288.07",
    kp: "Rp 31,953.008T",
    vol: "1.538M",
    favorite: true,
  },
  {
    pasangan: "BTC/DAI",
    ht: "98,832.93 / Rp 1,612,213,281.72",
    p24: "+3.89%",
    tt24: "102,451.34 / Rp 94,288.07",
    kp: "Rp 31,953.008T",
    vol: "1.538M",
    favorite: false,
  },
];

export default function FavoriteDatatable() {
  const router = useRouter();
  return (
    <Card className="border-0">
      <CardHeader className="flex flex-row gap-2">
        <CardTitle className="text-xl font-bold">Favorit</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Pasangan</TableHead>
              <TableHead>Harga Terakhir</TableHead>
              <TableHead>Perubahan 24 Jam</TableHead>
              <TableHead>Tertinggi/Terendah 24 Jam</TableHead>
              <TableHead>Kapitalisasi Pasar</TableHead>
              <TableHead className="text-right">Volume 24 Jam</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((invoice, index) => (
              <TableRow
                className="h-14"
                key={index}
                onClick={() => {
                  router.push(`/${index + 1}`);
                }}
              >
                <TableCell className="h-14 font-medium flex items-center gap-2">
                  <Star
                    size={18}
                    className={
                      invoice.favorite ? "text-yellow-400" : "text-gray-400"
                    }
                    fill={invoice.favorite ? "yellow" : "gray"}
                  />
                  <span className="flex-1">{invoice.pasangan}</span>
                </TableCell>
                <TableCell>{invoice.ht}</TableCell>
                <TableCell
                  className={
                    parseFloat(invoice.p24.replace("%", "")) >= 0
                      ? `text-emerald-400`
                      : `text-red-500`
                  }
                >
                  {invoice.p24}
                </TableCell>
                <TableCell>{invoice.tt24}</TableCell>
                <TableCell>{invoice.kp}</TableCell>
                <TableCell className="text-right">{invoice.vol}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
