import { LineCharts } from "@/components/line-chart";
import Section from "@/components/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Metadata } from "next";
import { positiveData } from "../../positive-data";
import { negativeData } from "@/negative-data";
import FavoriteDatatable from "@/components/favorite-datatable";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <Section className="mt-14 container">
        <h1 className="font-extrabold lg:text-6xl text-3xl">Pasar</h1>
        <p className="mt-2 text-muted-foreground">
          Harga Kripto dalam Rupiah Hari ini di Market Terbesar Indonesia
        </p>
      </Section>
      <Section className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  gap-4">
        <Card>
          <CardHeader className="text-xl font-semibold">TKO/IDR</CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="w-full h-full flex flex-col justify-center">
              <h2 className="text-2xl font-extrabold">Rp 5,261.3</h2>
              <p className="text-red-500 text-sm">-3.82%</p>
            </div>
            <div className="w-full h-full flex flex-col justify-center">
              <LineCharts
                data={negativeData}
                color="oklch(0.637 0.237 25.331)"
              />
              <p className="text-xs text-gray-400 text-end">
                Volume: 2,258 IDR
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-xl font-semibold">TKO/IDR</CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="w-full h-full flex flex-col justify-center">
              <h2 className="text-2xl font-extrabold">Rp 5,261.3</h2>
              <p className="text-red-500 text-sm">-3.82%</p>
            </div>
            <div className="w-full h-full flex flex-col justify-center">
              <LineCharts
                data={negativeData}
                color="oklch(0.637 0.237 25.331)"
              />
              <p className="text-xs text-gray-400 text-end">
                Volume: 2,258 IDR
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-xl font-semibold">TKO/IDR</CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="w-full h-full flex flex-col justify-center">
              <h2 className="text-2xl font-extrabold">Rp 5,261.3</h2>
              <p className="text-emerald-500 text-sm">-3.82%</p>
            </div>
            <div className="w-full h-full flex flex-col justify-center">
              <LineCharts
                data={positiveData}
                color="oklch(0.696 0.17 162.48)"
              />
              <p className="text-xs text-gray-400 text-end">
                Volume: 2,258 IDR
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-xl font-semibold">TKO/IDR</CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="w-full h-full flex flex-col justify-center">
              <h2 className="text-2xl font-extrabold">Rp 5,261.3</h2>
              <p className="text-emerald-500 text-sm">-3.82%</p>
            </div>
            <div className="w-full h-full flex flex-col justify-center">
              <LineCharts
                data={positiveData}
                color="oklch(0.696 0.17 162.48)"
              />
              <p className="text-xs text-gray-400 text-end">
                Volume: 2,258 IDR
              </p>
            </div>
          </CardContent>
        </Card>
      </Section>
      <Section className="container">
        <FavoriteDatatable />
      </Section>
    </>
  );
}
