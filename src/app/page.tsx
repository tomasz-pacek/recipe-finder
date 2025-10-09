import Link from "next/link";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import BuiltForRealLife from "../../components/BuiltForRealLife";
import CookSmarter from "../../components/CookSmarter";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-y-2 px-4">
      <div className="flex flex-col items-center justify-center z-10">
        <h1 className="text-neutral-900 font-extrabold text-6xl mt-24 text-center">
          Healthy meals, zero fuss
        </h1>
        <p className="text-center font-medium text-lg">
          Discover eight quick, whole-food recipes that you can cook tonight{" "}
          <br /> —no processed junk, no guesswork.
        </p>
        <Link
          href="/recipes"
          className="font-bold text-lg bg-neutral-900 text-white px-6 py-3 rounded-lg mt-8"
        >
          Start exploring
        </Link>
      </div>
      <Hero />
      <Features />
      <BuiltForRealLife />
      <CookSmarter />
    </div>
  );
}
