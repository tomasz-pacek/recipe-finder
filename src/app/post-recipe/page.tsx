import { getCurrentSession } from "@/lib/auth-utils";
import RecipeForm from "./_components/RecipeForm";
import { redirect } from "next/navigation";

export default async function PostRecipePage() {
  const session = await getCurrentSession();
  if (!session && !session?.user) redirect("/");
  return (
    <div className="w-screen">
      <div className="container mx-auto flex flex-col items-center justify-center gap-y-4 mt-6">
        <h2 className="text-neutral-900 font-extrabold text-3xl">
          Here you can post your own recipe!
        </h2>
        <RecipeForm />
      </div>
    </div>
  );
}
