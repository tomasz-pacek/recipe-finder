"use client";

import { Separator } from "@/components/ui/separator";
import { LoginForm } from "../_components/LoginForm";
import GoogleSignInButton from "../../../../components/GoogleSignIn";
import GithubSignInButton from "../../../../components/GithubSignIn";
import NewHere from "../../../../components/NewHere";

export default function LoginPage() {
  return (
    <div className="w-screen mt-18">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-4 shadow-xl border py-6 px-12 rounded-xl w-1/4">
          <h2 className="text-4xl font-extrabold text-neutral-900">
            Welcome back!
          </h2>
          <p className="text-center">
            Create an account or login through Google or Github
          </p>
          <LoginForm />
          <Separator />
          <GoogleSignInButton text="Sign in with Google" />
          <GithubSignInButton text="Sign in with Github" />
          <NewHere
            text="New here?"
            linkText="Create an account"
            url="/register"
          />
        </div>
      </div>
    </div>
  );
}
