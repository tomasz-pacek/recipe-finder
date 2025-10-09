import Image from "next/image";

type Features = {
  icon: string;
  title: string;
  description: string;
  alt: string;
};

export default function Features() {
  const featuers: Features[] = [
    {
      icon: "/images/icon-whole-food-recipes.svg",
      title: "Whole-food recipes",
      description: "Each dish uses everyday, unprocessed ingredients.",
      alt: "carrot image",
    },
    {
      icon: "/images/icon-minimum-fuss.svg",
      title: "Minimum fuss",
      description:
        "All recipes are designed to make eating healthy quick and easy",
      alt: "fuss image",
    },
    {
      icon: "/images/icon-search-in-seconds.svg",
      title: "Search in seconds",
      description:
        "Filter by name or ingredient and jump straight to the recipe you need",
      alt: "search image",
    },
  ];
  return (
    <div>
      <h2 className="text-neutral-900 font-extrabold text-5xl text-center mb-12">
        What you&apos;ll get
      </h2>
      <div className="grid grid-cols-3 gap-8 justify-center max-lg:grid-cols-2 max-md:grid-cols-1">
        {featuers.map((feature, index) => (
          <div key={index} className="flex flex-col items-start justify-center">
            <div className="flex flex-col items-start justify-center gap-y-4">
              <div className="bg-white border border-neutral-200 p-4 rounded-2xl w-16 h-16 flex items-center justify-center">
                <Image
                  src={feature.icon}
                  width={24}
                  height={34}
                  alt={feature.alt}
                />
              </div>
              <p className="text-4xl font-bold">{feature.title}</p>
              <p className="text-lg text-pretty">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className="my-24" />
    </div>
  );
}
