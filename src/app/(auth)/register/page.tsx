"use client";

import { Separator } from "@/components/ui/separator";
import { RegisterForm } from "../_components/RegisterForm";
import GoogleSignInButton from "../../../../components/GoogleSignIn";
import GithubSignInButton from "../../../../components/GithubSignIn";
import NewHere from "../../../../components/NewHere";

export default function RegisterPage() {
  return (
    <div className="w-screen mt-18">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-4 shadow-xl border py-6 px-12 rounded-xl w-1/4">
          <h2 className="text-4xl font-extrabold text-neutral-900">Welcome!</h2>
          <p className="text-center">
            Create an account or register through Google or Github
          </p>
          <RegisterForm />
          <Separator />
          <GoogleSignInButton text="Sign up with Google" />
          <GithubSignInButton text="Sign up with Google" />
          <NewHere text="Already been here?" linkText="Log in" url="/login" />
        </div>
      </div>
    </div>
  );
}
