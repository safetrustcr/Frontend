import Link from "next/link";
import { KeyRound, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Buildings from "@/components/auth/ui/Buildings";

export default function ForgotPassword() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6 text-center">
        <div className="flex justify-center">
          <div className="bg-[#2857B8] p-3 rounded-full">
            <KeyRound className="h-10 w-10 text-white" />
          </div>
        </div>

        <h1 className="text-2xl font-bold">Forgot password?</h1>
        <p className="text-gray-500 text-sm">
          No worries, we’ll send you a temporary password
        </p>

        <div className="space-y-4">
          <div className="space-y-2 text-left">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>

          <Button className="w-full bg-[#2857B8] hover:bg-[#2857B8]/90">
            Send password
          </Button>

          <Link
            href="/login"
            className="flex items-center justify-center text-sm text-[#2857B8] hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to log in
          </Link>
        </div>
      </div>

      <Buildings />
    </div>
  );
}
