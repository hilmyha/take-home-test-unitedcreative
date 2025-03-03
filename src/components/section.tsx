import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return <section className={`py-12 ${className}`}>{children}</section>;
}
