'use client';

import { SideBar } from "@/components/layouts/SideBar";
import { Header } from "@/components/layouts/Header";
export default function HotelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full">
      <Header />
      <SideBar notificationCount={1} />
      <main className="flex-1 p-2 pt-16 md:p-10 md:ml-48">
        {children}
      </main>
    </div>
  );
} 