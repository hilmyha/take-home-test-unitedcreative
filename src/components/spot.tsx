"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function SpotTrading() {
  return (
    <Card className="p-6 dark:bg-slate-950">
      <h2 className="text-lg font-semibold mb-2">Spot</h2>

      {/* Tabs */}
      <Tabs defaultValue="limit">
        <TabsList className="grid grid-cols-3 w-full mb-4">
          <TabsTrigger value="limit">Limit</TabsTrigger>
          <TabsTrigger value="market">Pasar</TabsTrigger>
          <TabsTrigger value="stop-limit">Stop Limit</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Beli BTC */}
        <Card className="dark:bg-slate-950">
          <CardHeader className="text-center font-semibold">
            Beli BTC
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="relative">
              <p className="text-sm">Harga</p>
              <div className="flex items-center relative">
                <Input type="number" defaultValue={12332} />
                <span className="absolute right-3 text-gray-400 flex items-center">
                  IDR <ChevronDown className="ml-1 w-4 h-4" />
                </span>
              </div>
            </div>

            <div className="relative">
              <p className="text-sm">Jumlah</p>
              <div className="flex items-center relative">
                <Input type="number" defaultValue={0} />
                <span className="absolute right-3 text-gray-400 flex items-center">
                  BTC <ChevronDown className="ml-1 w-4 h-4" />
                </span>
              </div>
            </div>

            <div className="relative">
              <p className="text-sm">Total</p>
              <div className="flex items-center relative">
                <Input type="number" defaultValue={0} />
                <span className="absolute right-3 text-gray-400 flex items-center">
                  IDR
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-400">Tersedia:</p>
              <p className="text-xs text-gray-400">1.000.000 IDR</p>
            </div>
            <Button
              className="w-full border text-orange-400 border-orange-500 dark:bg-slate-950"
              variant="outline"
            >
              Beli BTC
            </Button>
          </CardContent>
        </Card>

        {/* Jual BTC */}
        <Card className="dark:bg-slate-950">
          <CardHeader className="text-center font-semibold">
            Jual BTC
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="relative">
              <p className="text-sm">Harga</p>
              <div className="flex items-center relative">
                <Input type="number" defaultValue={12332} />
                <span className="absolute right-3 text-gray-400 flex items-center">
                  IDR <ChevronDown className="ml-1 w-4 h-4" />
                </span>
              </div>
            </div>

            <div className="relative">
              <p className="text-sm">Jumlah</p>
              <div className="flex items-center relative">
                <Input type="number" defaultValue={0} />
                <span className="absolute right-3 text-gray-400 flex items-center">
                  BTC <ChevronDown className="ml-1 w-4 h-4" />
                </span>
              </div>
            </div>

            <div className="relative">
              <p className="text-sm">Total</p>
              <div className="flex items-center relative">
                <Input type="number" defaultValue={0} />
                <span className="absolute right-3 text-gray-400 flex items-center">
                  IDR
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-400">Tersedia:</p>
              <p className="text-xs text-gray-400">1.000.000 IDR</p>
            </div>
            <Button
              className="w-full border text-orange-400 border-orange-500 dark:bg-slate-950"
              variant="outline"
            >
              Jual BTC
            </Button>
          </CardContent>
        </Card>
      </div>
    </Card>
  );
}
