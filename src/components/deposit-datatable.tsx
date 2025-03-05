import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const data = [
  {
    id: "DEPO-IDR-041213123413531",
    asset: "IDR",
    amount: "90.000",
    status: "Success",
  },
  {
    id: "DEPO-IDR-041213123413531",
    asset: "IDR",
    amount: "140.000",
    status: "Success",
  },
  {
    id: "DEPO-IDR-041213123413531",
    asset: "IDR",
    amount: "140.000",
    status: "Rejected",
  },
  {
    id: "DEPO-BTC-041213123413531",
    asset: "BTC",
    amount: "0.00000012",
    status: "Success",
  },
  {
    id: "DEPO-BTC-041213123413531",
    asset: "BTC",
    amount: "0.00000012",
    status: "Success",
  },
];

export default function DepositDatatable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>List of Deposit</CardTitle>
        <CardDescription>All your deposit will be listed here.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A list of your recent deposit.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No</TableHead>
              <TableHead>Deposit ID</TableHead>
              <TableHead>Asset</TableHead>
              <TableHead>Amount Nett</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{invoice.id}</TableCell>
                <TableCell>{invoice.asset}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell className="text-right">
                  {invoice.status === "Success" ? (
                    <Badge className="bg-emerald-600 dark:text-white">
                      {invoice.status}
                    </Badge>
                  ) : (
                    <Badge className="bg-red-600 dark:text-white">
                      {invoice.status}
                    </Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
