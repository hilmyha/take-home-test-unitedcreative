import MemberDatatable from "@/components/member-datatable";
import Section from "@/components/section";
import React from "react";

export default function page() {
  return (
    <>
      <Section className="px-5">
        <MemberDatatable />
      </Section>
    </>
  );
}
