"use client";

import BookDatatable from "@/components/book-datatable";
import CandleStick from "@/components/candle-stick";
import MarketDatatable from "@/components/market-datatable";
import OpenTransactionDatatable from "@/components/open-transaction-datatable";
import RateDatatable from "@/components/rate-datatable";
import Section from "@/components/section";
import SpotTrading from "@/components/spot";
import React from "react";

export default function DetailPage() {
  return (
    <>
      <Section className="px-5 container">
        <div className="dark:bg-slate-950 grid grid-cols-1 lg:grid-cols-7 items-center gap-4 px-6 py-8 rounded-2xl border">
          <h2 className="font-bold text-lg">BTC/IDR</h2>
          <div>
            <p className="text-sm">12.323</p>
            <p className="text-sm">Rp 12, 323.00</p>
          </div>
          <div>
            <p className="text-sm">Perubahan 24jam</p>
            <p className="text-sm text-red-500">-687-5.28%</p>
          </div>
          <div>
            <p className="text-sm">High 24jam</p>
            <p className="text-sm">13,010</p>
          </div>
          <div>
            <p className="text-sm">Low 24jam</p>
            <p className="text-sm">11,860</p>
          </div>
          <div>
            <p className="text-sm text-nowrap">Volume 24jam (BTC)</p>
            <p className="text-sm">42,556.70</p>
          </div>
          <div>
            <p className="text-sm text-nowrap">Volume 24jam (IDR)</p>
            <p className="text-sm">520,707,732.80</p>
          </div>
        </div>
      </Section>
      <Section className="container grid grid-cols-1 xl:grid-cols-[1fr_2fr_1fr] gap-4 px-5">
        <div className="">
          <BookDatatable />
        </div>
        <div className="space-y-4">
          <CandleStick />
          <SpotTrading />
        </div>
        <div className="grid gap-4">
          <RateDatatable />
          <MarketDatatable />
        </div>
      </Section>
      <Section className="container px-5">
        <OpenTransactionDatatable />
      </Section>
    </>
  );
}
