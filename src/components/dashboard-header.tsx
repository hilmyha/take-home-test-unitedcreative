import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Link from "next/link";

export default function DashboardHeader() {
  return (
    <header className="flex sticky top-0 z-50 py-6 w-full border-b bg-background">
      <div className="flex justify-between h-[--header-height] w-full items-center gap-2 px-4">
        <Image src={Logo} alt="Company Logo" className="mr-2 w-14" />
        <div className="flex items-center gap-4">
          <Link href={"/"}>Keluar</Link>
        </div>
      </div>
    </header>
  );
}
