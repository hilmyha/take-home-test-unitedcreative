"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  // SidebarGroupContent,
  // SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import {
  File,
  FilePen,
  HandCoins,
  LaptopMinimalCheck,
  LayoutDashboard,
  Settings,
  Users,
  Wallet,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Deposit",
    url: "/dashboard/deposit",
    icon: Wallet,
  },
  {
    title: "Withdraw",
    url: "#",
    icon: HandCoins,
  },
  {
    title: "Member",
    url: "/dashboard/member",
    icon: Users,
  },
  {
    title: "Verification (KYC)",
    url: "#",
    icon: LaptopMinimalCheck,
  },
  {
    title: "Reset 2FA Request",
    url: "#",
    icon: FilePen,
  },
  {
    title: "Daily Reports",
    url: "#",
    icon: File,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar
      className="font-[family-name:var(--font-roboto)] fixed top-26 h-[calc(100vh-3.5rem)]"
      {...props}
      suppressHydrationWarning
    >
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => {
              const isActive = pathname === item.url;
              return (
                <SidebarMenuItem
                  key={item.title}
                  className={
                    isActive ? "text-yellow-600 dark:text-yellow-400" : ""
                  }
                >
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="flex items-center gap-2 p-2 rounded-md"
                    >
                      <item.icon className={"w-5 h-5"} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
