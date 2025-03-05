import Image from "next/image";
import Logo from "../../public/logo.svg";
import React from "react";
import Link from "next/link";
import SignButton from "./sign-button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-950 border-b sticky top-0 shadow-lg z-50">
      <div className="py-6 flex items-center justify-between container mx-auto px-4">
        {/* Logo and Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src={Logo} alt="Company Logo" className="mr-2 w-16" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-4">
            <Link href={"#"}>Pasar</Link>
            <Link href={"#"}>Tentang Kami</Link>
            <Link href={"#"}>Kontak Kami</Link>
          </nav>
        </div>

        {/* Sign In / Sign Up Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <SignButton title="Sign In" />
          </Link>
          <div className="hidden md:block">
            <SignButton title="Sign Up" />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-4 p-6">
                  <Link href={"#"}>Pasar</Link>
                  <Link href={"#"}>Tentang Kami</Link>
                  <Link href={"#"}>Kontak Kami</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
