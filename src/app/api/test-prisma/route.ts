import { prisma } from "@/lib/prisma";

export async function GET() {
  const ingredients = await prisma.ingredient.findMany();
  return new Response(JSON.stringify(ingredients));
}
