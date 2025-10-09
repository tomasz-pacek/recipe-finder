import { prisma } from "@/lib/prisma";
import Breadcrumbs from "./_components/Breadcrumbs";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import RecipeItem from "../_components/RecipeItem";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function RecipeDetailPage({ params }: Props) {
  const slug = (await params).slug;
  const recipe = await prisma.recipe.findUnique({
    where: {
      slug: slug,
    },
    include: {
      instructions: true,
      ingredients: true,
    },
  });

  return (
    <>
      {recipe?.slug ? (
        <div className="container mx-auto flex flex-col items-center justify-center gap-y-4 mt-12  text-neutral-900 px-4">
          {/* RECIPE DETAILS */}
          <Breadcrumbs title={recipe?.title} slug={slug} />
          <div className="w-full flex flex-row items-start justify-center gap-x-8 max-lg:flex-col">
            {/* IMAGE SECTION */}
            <div className="w-1/2 h-[650px] relative max-lg:w-full">
              <Image
                src={recipe?.image || "/images/salmon-asparagus-small.webp"}
                alt={recipe?.title || "Dish picture"}
                fill
                className="rounded-xl object-cover object-center"
              />
            </div>
            {/* DETAILS SECTION */}
            <div className="w-1/2 flex flex-col items-start justify-start gap-y-4 max-lg:w-full max-lg:mt-6">
              <h2 className="font-extrabold text-6xl leading-16 ">
                {recipe?.title}
              </h2>
              <p className="text-lg">{recipe?.description}</p>
              {/* ICONS FLEX */}
              <div className="flex flex-row items-center justify-center gap-x-4">
                <div className="flex flex-row items-center gap-x-2 font-semibold">
                  <Image
                    src="/images/icon-servings.svg"
                    width={20}
                    height={20}
                    alt="servings icon"
                  />
                  <span>Servings:</span>
                  <span>{recipe?.servings}</span>
                </div>
                <div className="flex flex-row items-center gap-x-2 font-semibold">
                  <Image
                    src="/images/icon-prep-time.svg"
                    width={20}
                    height={20}
                    alt="preparation time icon"
                  />
                  <span>Prep:</span>
                  <span>{recipe?.prepTime}</span>
                </div>
                <div className="flex flex-row items-center gap-x-2 font-semibold">
                  <Image
                    src="/images/icon-cook-time.svg"
                    width={20}
                    height={20}
                    alt="cook time icon"
                  />
                  <span>Cook:</span>
                  <span>{recipe?.cookTime}</span>
                </div>
              </div>
              {/* INGREDIENTS */}
              <div className="w-full space-y-4">
                <h2 className="font-extrabold text-2xl">Ingredients:</h2>
                <div className="flex flex-col items-start justify-center gap-y-2">
                  {recipe?.ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center justify-center gap-x-2"
                    >
                      <Image
                        src="/images/icon-bullet-point.svg"
                        width={32}
                        height={32}
                        alt="bullet point icon"
                      />
                      <span className="text-lg">{ingredient.quantity}</span>
                      <span className="text-lg">{ingredient.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* INSTRUCTIONS */}
              <div className="w-full space-y-4">
                <h2 className="font-extrabold text-2xl">Instructions:</h2>
                <div className="flex flex-col items-start justify-center gap-y-2">
                  {recipe?.instructions.map((instruction, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center justify-center gap-x-2"
                    >
                      <Image
                        src="/images/icon-bullet-point.svg"
                        width={32}
                        height={32}
                        alt="bullet point icon"
                      />
                      <span className="text-lg">
                        {instruction.step.replace(/^\d+\.\s*/, "")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-24" />
          {/* MORE RECIPES */}
          <div className="w-full flex flex-col items-start justify-center gap-y-6">
            <h2 className="text-4xl font-bold">More recipes</h2>
            <div className="w-full grid grid-cols-3 max-lg:grid-cols-1 gap-8 items-stretch">
              <RecipeItem random />
            </div>
          </div>
        </div>
      ) : (
        notFound()
      )}
    </>
  );
}
