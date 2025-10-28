"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  FileText,
  Home,
  LogOut,
  Settings as SettingsIcon,
  Tag,
  User,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type SidebarItem = {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
};

const sidebars: SidebarItem[] = [
  { name: "Overviews", path: "/", icon: Home },
  { name: "Restaurants", path: "/restaurants", icon: UtensilsCrossed },
  { name: "Orders", path: "/orders", icon: FileText },
  { name: "Customer", path: "/customer", icon: Users },
  { name: "Coupons", path: "/coupons", icon: Tag },
  { name: "Admin Roles", path: "/admin-roles", icon: SettingsIcon },
  { name: "Settings", path: "/settings", icon: User },
  { name: "Logout", path: "/auth/login", icon: LogOut },
];

export default function CathaSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <Sidebar className="border-none">
      <SidebarContent className="bg-[#3d1a8f] text-white">
        <SidebarGroup>
          {/* Header Section with gradient */}
          <div className="bg-gradient-to-b from-[#2d0f6f] to-[#3d1a8f] h-16"></div>

          {/* Navigation Menu */}
          <SidebarGroupContent className="px-0">
            <SidebarMenu className="space-y-0">
              {sidebars.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    className={`h-14 px-6 rounded-none transition-all duration-200 ${isActive(item.path)
                      ? "bg-[#e8e4f3] text-[#3d1a8f] hover:bg-[#e8e4f3] hover:text-[#3d1a8f] border-l-4 border-[#ffa500]"
                      : "text-white hover:bg-[#4d2a9f] hover:text-white border-l-4 border-transparent"
                      }`}
                  >
                    <Link href={item.path} className="flex items-center gap-4 w-full">
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      <span className="text-base font-normal">{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}