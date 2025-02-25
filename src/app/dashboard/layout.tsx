"use client";

import { redirect } from "next/navigation";
import { useGlobalAuthenticationStore } from "@/core/store/data";
import { SideBar } from "@/components/layouts/SideBar";
import { Header } from "@/components/layouts/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const address = useGlobalAuthenticationStore((state) => state.address);

  // Authentication check
  if (address === "") {
    redirect("/");
  }

  return (
    <div className="flex h-full">
      <Header />
      <SideBar notificationCount={1} />
      <main className="flex-1 p-2 pt-16 md:p-10 md:ml-48">
        {children}
      </main>
    </div>
  );
};

export default Layout;
