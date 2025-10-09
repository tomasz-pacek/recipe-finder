import RecipeItem from "./_components/RecipeItem";
import FiltersBar from "./_components/FiltersBar";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RecipesPage({ searchParams }: Props) {
  return (
    <div className="container text-neutral-900 mx-auto flex flex-col items-center justify-center gap-y-4 px-4">
      <div className="space-y-4 mt-20">
        <h1 className="text-5xl font-extrabold text-center">
          Explore our simple, healthy recipes
        </h1>
        <p className="text-center text-lg text-pretty">
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.
        </p>
      </div>
      <FiltersBar />
      {/* RECIPES GRID */}
      <div className="w-full grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-8 items-stretch">
        <RecipeItem searchParams={searchParams} />
      </div>
    </div>
  );
}
