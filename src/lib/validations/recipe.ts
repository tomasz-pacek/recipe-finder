import { z } from "zod";

export const recipeSchema = z.object({
  title: z.string().min(3, "Title is required."),
  description: z.string().min(10, "Description is required."),
  servings: z.coerce.number().min(1),
  prepTime: z.coerce.number().min(1),
  cookTime: z.coerce.number().min(0),
  slug: z.string(),
  ingredients: z.array(
    z.object({
      name: z.string().min(1, "Invalid ingredient name"),
      quantity: z.string().min(1, "Invalid quantity"),
    })
  ),
  instructions: z.array(
    z.object({
      step: z.string().min(1, "Invalid step"),
    })
  ),
  image: z.string().optional(),
});

export type RecipeFormValues = z.infer<typeof recipeSchema>;
