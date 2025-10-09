"use client";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { FaGoogle } from "react-icons/fa";
import { toast } from "sonner";

type Props = {
  text: string;
};

export default function GoogleSignInButton({ text }: Props) {
  const { session } = useAuth();

  async function handleClick() {
    if (!session) {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } else {
      toast.info("You're already logged in!");
    }
  }
  return (
    <Button
      onClick={handleClick}
      type="button"
      className="w-full border-2 cursor-pointer"
      variant="secondary">
      <FaGoogle />
      {text}
    </Button>
  );
}
