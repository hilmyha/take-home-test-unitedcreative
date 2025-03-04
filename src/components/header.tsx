import Image from "next/image";
import Logo from "../../public/logo.svg";
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className={`border-b sticky top-0 shadow-lg z-10`}>
      <div className="py-6 flex items-center justify-between container">
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <Image src={Logo} alt="Company Logo" className="mr-2" />
          </Link>
          <Link href={"#"}>Pasar</Link>
          <Link href={"#"}>Tentang Kami</Link>
          <Link href={"#"}>Kontak Kami</Link>
        </div>
        <div className="">p</div>
      </div>
    </header>
  );
}
