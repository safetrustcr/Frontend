import { KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Buildings from "@/components/auth/ui/Buildings";

export default function NewPassword() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6 text-center">
        {/* Icono superior */}
        <div className="flex justify-center">
          <div className="bg-[#2857B8] p-3 rounded-full">
            <KeyRound className="h-10 w-10 text-white" />
          </div>
        </div>

        <h1 className="text-2xl font-bold">New password</h1>
        <p className="text-gray-500 text-sm">Please, change the password</p>

        <div className="space-y-4">
          <div className="space-y-2 text-left">
            <Label htmlFor="temp-password">Temporal password</Label>
            <Input id="temp-password" type="password" placeholder="********" />
          </div>

          <div className="space-y-2 text-left">
            <Label htmlFor="new-password">New password</Label>
            <Input id="new-password" type="password" placeholder="********" />
          </div>

          <Button className="w-full bg-[#2857B8] hover:bg-[#2857B8]/90">
            Save
          </Button>
        </div>
      </div>

      <Buildings />
    </div>
  );
}
