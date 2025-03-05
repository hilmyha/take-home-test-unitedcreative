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

export default function OpenTransactionDatatable() {
  return (
    <Card className="dark:bg-slate-950">
      <CardHeader>
        <CardTitle>Transaksi Terbuka</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Tanggal</TableHead>
              <TableHead>Pasangan</TableHead>
              <TableHead>Jenis</TableHead>
              <TableHead>Sisi</TableHead>
              <TableHead>Harga</TableHead>
              <TableHead>Jumlah</TableHead>
              <TableHead>Terisi</TableHead>
              <TableHead>Total</TableHead>
              <TableHead className="text-right">Kondisi Pemicu</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={9} className="h-44 text-center">
                Anda tidak memiliki order Terbuka
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
