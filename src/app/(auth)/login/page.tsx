import { Separator } from "@/components/ui/separator";
import { LoginForm } from "../_components/LoginForm";
import GoogleSignInButton from "../../../../components/GoogleSignIn";
import GithubSignInButton from "../../../../components/GithubSignIn";
import NewHere from "../../../../components/NewHere";
import { getCurrentSession } from "@/lib/auth-utils";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getCurrentSession();
  if (session && session?.user) redirect("/");
  return (
    <div className="container mx-auto flex items-center justify-center mt-18 px-4">
      <div className="flex flex-col items-center justify-center gap-y-4 shadow-xl border py-6 px-12 rounded-xl max-sm:px-4">
        <h2 className="text-4xl font-extrabold text-neutral-900 text-center">
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
  );
}
