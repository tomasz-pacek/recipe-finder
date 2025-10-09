import { prisma } from "@/lib/prisma";
import { createRecipeSlug } from "@/utils/slugify";
import Image from "next/image";
import ViewRecipeButton from "./ViewRecipeButton";

type Props = {
  random?: boolean;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>; // <- opcjonalne
};

export default async function RecipeItem({ random, searchParams }: Props) {
  let query: string | undefined;
  let prepTime: number | undefined;
  let cookTime: number | undefined;

  if (searchParams) {
    const params = await searchParams;
    query = params?.q as string | undefined;
    prepTime = params?.prep ? Number(params?.prep) : undefined;
    cookTime = params?.cook ? Number(params?.cook) : undefined;
  }

  let recipes = await prisma.recipe.findMany({
    include: {
      ingredients: true,
      instructions: true,
    },
    where: searchParams
      ? {
          AND: [
            query
              ? {
                  OR: [
                    { title: { contains: query, mode: "insensitive" } },
                    {
                      ingredients: {
                        some: {
                          name: { contains: query, mode: "insensitive" },
                        },
                      },
                    },
                  ],
                }
              : {},
            prepTime !== undefined ? { prepTime: { lte: prepTime } } : {},
            cookTime !== undefined ? { cookTime: { lte: cookTime } } : {},
          ],
        }
      : {},
    orderBy: { createdAt: "desc" },
  });

  if (random) {
    recipes = recipes.sort(() => 0.5 - Math.random()).slice(0, 3);
  }

  return (
    <>
      {recipes.map((recipe, index) => {
        const slug = createRecipeSlug(recipe.title);
        return (
          <div
            key={index}
            className="bg-white border rounded-xl p-2 w-full flex flex-col h-full">
            {/* IMAGE */}
            <div className="relative w-full h-[300px]">
              <Image
                src={recipe.image || "/images/quinoa-veggie-bowl-small.webp"}
                alt={recipe.title}
                fill
                className="object-cover object-center rounded-lg"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col flex-1 justify-between mt-4">
              <div>
                <h2 className="font-bold text-xl px-3 truncate">
                  {recipe.title}
                </h2>
                <p className="px-3 text-base mt-2">{recipe.description}</p>

                <div className="grid grid-cols-2 gap-y-2 mt-4">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/images/icon-servings.svg"
                      width={20}
                      height={20}
                      alt="servings image"
                    />
                    <span>Servings:</span>
                    <span>{recipe.servings}</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/images/icon-prep-time.svg"
                      width={20}
                      height={20}
                      alt="prep image"
                    />
                    <span>Prep:</span>
                    <span>{recipe.prepTime} mins</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/images/icon-cook-time.svg"
                      width={20}
                      height={20}
                      alt="cook image"
                    />
                    <span>Cook:</span>
                    <span>{recipe.cookTime} mins</span>
                  </div>
                </div>
              </div>

              <ViewRecipeButton slug={slug} />
            </div>
          </div>
        );
      })}
    </>
  );
}
