import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="w-full flex flex-row items-center justify-between gap-x-12 text-neutral-900 mt-18 max-lg:flex-col gap-y-12">
      {/* TEXT SECTION */}
      <div className="w-1/2 flex flex-col items-start justify-center gap-y-4 text-pretty max-lg:w-full">
        <p className="font-bold text-lg bg-neutralOrange px-1 rounded-md">
          Our mission
        </p>
        <h2 className="font-extrabold text-6xl">
          Help more people cook nourishing meals, more often.
        </h2>
        <p className="text-xl">
          Healthy Recipe Finder was created to prove that healthy eating can be
          convenient, affordable, and genuinely delicious.
        </p>
        <p className="text-xl">
          We showcase quick, whole-food dishes that anyone can master—no fancy
          equipment, no ultra-processed shortcuts—just honest ingredients and
          straightforward steps.
        </p>
      </div>
      <Image
        src="/images/image-about-our-mission-large.webp"
        width={1236}
        height={1200}
        alt="image our mission"
        className="w-1/2 rounded-2xl max-lg:w-full"
      />
    </div>
  );
}
