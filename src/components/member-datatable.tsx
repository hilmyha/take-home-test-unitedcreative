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
    email: "ronald@example.com",
    username: "ronald",
    name: "Ronald Wattson",
    status: "active",
    kyc: "No-KYC",
  },
  {
    email: "cody@example.com",
    username: "cody",
    name: "Cody Cooper",
    status: "active",
    kyc: "No-KYC",
  },
  {
    email: "shawn@example.com",
    username: "shawn",
    name: "Shawn Nguyen",
    status: "active",
    kyc: "No-KYC",
  },
  {
    email: "ann@example.com",
    username: "ann",
    name: "Ann Jones",
    status: "active",
    kyc: "No-KYC",
  },
  {
    email: "mitchell@example.com",
    username: "mitchell",
    name: "Mitchell Fisher",
    status: "active",
    kyc: "No-KYC",
  },
];

export default function MemberDatatable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>List of Member</CardTitle>
        <CardDescription>All your member will be listed here.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A list of your recent member.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">KYC</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((member, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.username}</TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>
                  {member.status === "active" ? (
                    <Badge className="text-capitalize bg-emerald-600 dark:text-white">
                      {member.status}
                    </Badge>
                  ) : (
                    <Badge className="text-capitalize bg-red-600 dark:text-white">
                      {member.status}
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <Badge>{member.kyc}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
