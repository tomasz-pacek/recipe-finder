"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = {
  slug: string;
};

export default function ViewRecipeButton({ slug }: Props) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/recipes/${slug}`);
  };
  return (
    <>
      <Button
        onClick={handleClick}
        className="w-full bg-neutral-900 hover:bg-neutral-600 text-base rounded-full py-4 mt-4">
        View Recipe
      </Button>
    </>
  );
}
