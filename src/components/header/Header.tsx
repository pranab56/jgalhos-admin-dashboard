"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bell, ChevronDown, Search } from "lucide-react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Header() {
  const unreadCount = 1; // Example unread count
  const userName = "Sazzad";
  const userRole = "Super Admin";
  const userImage = "https://api.dicebear.com/7.x/avataaars/svg?seed=Sazzad";
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);



  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const handleMyProfile = () => {
    router.push("/settings");
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    setIsDropdownOpen(false);
    router.push("/auth/login");
  };

  return (
    <div className="w-full border-b bg-white">
      <header className="flex h-24 items-center justify-between px-8">
        {/* Left side - Logo */}
        <div className="flex items-center gap-3">
          <Image src={"/icons/logo.png"} width={100} height={100} alt='logo' className='w-full h-full' />
        </div>

        {/* Middle - Search Bar */}
        <div className="flex-1 max-w-xl mx-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-orange-500" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full h-12 pl-12 pr-4 rounded-lg bg-gray-50 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white border border-transparent focus:border-orange-500 transition-all"
            />
          </div>
        </div>

        {/* Right side - Language, Notification and Profile */}
        <div className="flex items-center gap-6">
          {/* Language Selector */}


          {/* Notification Bell */}
          <div className="relative">
            <button
              onClick={() => router.push("/notifications")}
              className="relative flex cursor-pointer items-center justify-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Bell className="h-6 w-6 text-gray-700" />
              {unreadCount > 0 && (
                <Badge
                  className="absolute -top-0.5 -right-0.5 h-4 w-4 min-w-4 rounded-full p-0 flex items-center justify-center text-[10px] font-semibold bg-orange-500 hover:bg-orange-500 border-2 border-white"
                >
                  {unreadCount > 99 ? "99+" : unreadCount}
                </Badge>
              )}
            </button>
          </div>

          {/* User Profile with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleProfileClick}
              className="flex items-center gap-3 pl-3 pr-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <Avatar className="h-11 w-11 ring-2 ring-gray-100">
                <AvatarImage src={userImage} alt={userName} />
                <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold text-sm">
                  {userName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold text-gray-900">
                  {userName}
                </span>
                <span className="text-xs text-gray-500">{userRole}</span>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500 ml-1" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg z-50">
                <button
                  onClick={handleMyProfile}
                  className="flex w-full px-4 py-2.5 text-sm cursor-pointer text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  My Profile
                </button>
                <div className="border-t border-gray-100 my-1"></div>
                <button
                  onClick={handleLogout}
                  className="flex w-full px-4 py-2.5 text-sm cursor-pointer text-red-600 hover:bg-gray-50 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}