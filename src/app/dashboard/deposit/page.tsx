import DepositDatatable from "@/components/deposit-datatable";
import Section from "@/components/section";
import React from "react";

export default function page() {
  return (
    <Section className="px-5">
      <DepositDatatable />
    </Section>
  );
}
