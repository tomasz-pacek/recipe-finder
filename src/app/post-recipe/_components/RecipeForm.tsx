"use client";

import {
  useForm,
  useFieldArray,
  type SubmitHandler,
  type Resolver,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { recipeSchema, type RecipeFormValues } from "@/lib/validations/recipe";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { createRecipeSlug } from "@/utils/slugify";

export default function NewRecipePage() {
  const router = useRouter();
  const form = useForm<RecipeFormValues>({
    resolver: zodResolver(recipeSchema) as Resolver<RecipeFormValues>,
    defaultValues: {
      title: "",
      description: "",
      servings: 1,
      prepTime: 10,
      cookTime: 10,
      slug: "",
      ingredients: [{ name: "", quantity: "" }],
      instructions: [{ step: "" }],
    },
  });

  const { control, handleSubmit } = form;

  const {
    fields: ingredientFields,
    append: addIngredient,
    remove: removeIngredient,
  } = useFieldArray({
    control,
    name: "ingredients",
  });

  const {
    fields: instructionFields,
    append: addInstruction,
    remove: removeInstruction,
  } = useFieldArray({
    control,
    name: "instructions",
  });

  const onSubmit: SubmitHandler<RecipeFormValues> = async (data) => {
    const recipeData = {
      ...data,
      image: data.image || "/images/quinoa-veggie-bowl-small.webp",
      slug: createRecipeSlug(data.title),
    };

    const res = await fetch("/api/recipes", {
      method: "POST",
      body: JSON.stringify(recipeData),
    });

    if (res.ok) {
      router.push("/recipes");
      setTimeout(() => {
        toast.info("Your recipe has been added succesfully!");
      }, 500);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto mt-10 text-neutral-900">
      <CardContent className="p-6 space-y-4">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Title */}
            <FormField
              control={control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center">
                    <FormLabel className="font-bold">Title</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      placeholder="e.g Mediterranean Chickpea Salad"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center">
                    <FormLabel className="font-bold">Description</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      placeholder="e.g A refreshing, protein-packed salad tossed in a lemon-lime dressing."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Servings / PrepTime / CookTime */}
            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={control}
                name="servings"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center">
                      <FormLabel className="font-bold">Servings</FormLabel>
                      <FormMessage />
                    </div>
                    <FormControl>
                      <Input type="number" placeholder="e.g 3" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="prepTime"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center">
                      <FormLabel className="font-bold">
                        Prep time (mins)
                      </FormLabel>
                      <FormMessage />
                    </div>
                    <FormControl>
                      <Input type="number" placeholder="e.g 15" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="cookTime"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center">
                      <FormLabel className="font-bold">
                        Cook time (mins)
                      </FormLabel>
                      <FormMessage />
                    </div>
                    <FormControl>
                      <Input type="number" placeholder="e.g 120" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Ingredients */}
            <div className="space-y-2">
              <h3 className="font-bold">Ingredients</h3>
              {ingredientFields.map((field, index) => (
                <div
                  key={field.id}
                  className="grid grid-cols-[1fr_1fr_auto] gap-2 items-start">
                  <FormField
                    control={control}
                    name={`ingredients.${index}.quantity`}
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between items-center">
                          <FormLabel>Amount</FormLabel>
                          <FormMessage />
                        </div>
                        <FormControl>
                          <Input placeholder="Amount" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name={`ingredients.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between items-center">
                          <FormLabel>Name</FormLabel>
                          <FormMessage />
                        </div>
                        <FormControl>
                          <Input placeholder="Ingredient" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {index > 0 && (
                    <Button
                      variant="destructive"
                      type="button"
                      className="self-end"
                      onClick={() => removeIngredient(index)}>
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                className="bg-neutral-900 hover:bg-neutral-600"
                onClick={() => addIngredient({ name: "", quantity: "" })}>
                Add ingredient
              </Button>
            </div>

            {/* Instructions */}
            <div className="space-y-2">
              <h3 className="font-bold">Instructions</h3>
              {instructionFields.map((field, index) => (
                <div
                  key={field.id}
                  className="grid grid-cols-[1fr_auto] gap-2 items-start">
                  <FormField
                    control={control}
                    name={`instructions.${index}.step`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <div className="flex justify-between items-center">
                          <FormLabel>Step {index + 1}</FormLabel>
                          <FormMessage />
                        </div>
                        <FormControl>
                          <Input placeholder={`Step ${index + 1}`} {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {index > 0 && (
                    <Button
                      variant="destructive"
                      type="button"
                      className="self-end"
                      onClick={() => removeInstruction(index)}>
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button
                className="bg-neutral-900 hover:bg-neutral-600"
                type="button"
                onClick={() => addInstruction({ step: "" })}>
                Add step
              </Button>
            </div>

            {/* Image (optional) */}
            <FormField
              control={control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center">
                    <FormLabel className="font-bold">
                      Image (optional)
                    </FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/png, image/webp"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            field.onChange(reader.result as string); // zapisujemy base64
                          };
                          reader.readAsDataURL(file);
                        } else {
                          field.onChange(undefined);
                        }
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-neutral-900 hover:bg-neutral-600">
              Add recipe
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
