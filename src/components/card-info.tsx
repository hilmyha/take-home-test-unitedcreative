import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Cpu } from "lucide-react";

interface CardInfoProps {
  title: string;
  nominals?: string;
  status: string;
}

export default function CardInfo({ title, nominals, status }: CardInfoProps) {
  return (
    <Card className="justify-center">
      <CardHeader>
        <CardTitle className="lg:text-lg flex items-center gap-2">
          <Cpu className="lg:h-8 lg:w-8" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg lg:text-xl font-semibold">{nominals}</p>
        <p className="text-sm text-muted-foreground">{status}</p>
      </CardContent>
    </Card>
  );
}
