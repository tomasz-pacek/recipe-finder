import RecipeItem from "./_components/RecipeItem";
import FiltersBar from "./_components/FiltersBar";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RecipesPage({ searchParams }: Props) {
  return (
    <div className="w-screen text-neutral-900">
      <div className="container max-w-7xl mx-auto flex flex-col items-center justify-center gap-y-4">
        <div className="space-y-4 mt-20">
          <h1 className="text-5xl font-extrabold">
            Explore our simple, healthy recipes
          </h1>
          <p className="text-center text-lg">
            Discover eight quick, whole-food dishes that fit real-life schedules
            and taste
            <br /> amazing. Use the search bar to find a recipe by name or
            ingredient, or simply scroll
            <br /> the list and let something delicious catch your eye.
          </p>
        </div>
        <FiltersBar />
        {/* RECIPES GRID */}
        <div className="w-full grid grid-cols-3 gap-8 items-stretch">
          <RecipeItem searchParams={searchParams} />
        </div>
      </div>
    </div>
  );
}
