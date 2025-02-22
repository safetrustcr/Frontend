"use client";

import { redirect } from "next/navigation";
import { useGlobalAuthenticationStore } from "@/core/store/data";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const address = useGlobalAuthenticationStore((state) => state.address);

  // Authentication check
  if (address === "") {
    redirect("/");
  }

  return <div>{children}</div>;
};

export default Layout;
