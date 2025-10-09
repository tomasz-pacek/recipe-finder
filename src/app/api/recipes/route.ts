import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { recipeSchema } from "@/lib/validations/recipe";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = recipeSchema.parse(body);

    const recipe = await prisma.recipe.create({
      data: {
        title: data.title,
        description: data.description,
        servings: data.servings,
        prepTime: data.prepTime,
        cookTime: data.cookTime,
        slug: data.slug,
        ingredients: {
          create: data.ingredients.map((ing) => ({
            name: ing.name,
            quantity: ing.quantity,
          })),
        },
        instructions: {
          create: data.instructions.map((step, idx) => ({
            step: `${idx + 1}. ${step.step}`,
          })),
        },
        image: data.image || "/images/quinoa-veggie-bowl-small.webp",
      },
      include: { ingredients: true, instructions: true },
    });

    return NextResponse.json(recipe, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Nie udało się dodać przepisu" },
      { status: 400 }
    );
  }
}
