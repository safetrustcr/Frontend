"use client";

import { useWallet } from "@/components/auth/wallet/hooks/wallet.hook";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

const DashboardPage = () => {
  const { handleDisconnect } = useWallet();

  return (
    <div>
      DashboardPage
      <Button
        variant="outline"
        className="w-full bg-black text-white"
        onClick={handleDisconnect}
      >
        <Wallet className="mr-2 h-4 w-4" />
        Disconnect
      </Button>
    </div>
  );
};

export default DashboardPage;
