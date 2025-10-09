import Image from "next/image";
import Link from "next/link";

export default function CookSmarter() {
  return (
    <div className="w-full mt-24 bg-neutral-200 flex flex-col items-center justify-center gap-y-4 text-neutral-900 py-28 px-6 rounded-xl relative overflow-hidden">
      <h2 className="font-extrabold text-5xl text-center">
        Ready to cook smarter?
      </h2>
      <p className="text-lg text-center">
        Hit the button, pick a recipe, and get dinner on the table—fast.
      </p>
      <Link
        href="/recipes"
        className="bg-neutral-900 text-white px-5 py-3 rounded-md "
      >
        Browse recipes
      </Link>
      {/* FORK */}
      <Image
        src="/images/pattern-fork.svg"
        width={315}
        height={391}
        alt="fork image"
        className="absolute -left-20 top-10 max-lg:size-3/4 max-lg:-left-60 max-lg:top-50 max-md:hidden"
      />
      {/* KNIFE */}
      <Image
        src="/images/pattern-knife.svg"
        width={339}
        height={339}
        alt="fork image"
        className="absolute -right-20 max-lg:size-3/4 max-lg:-right-60 max-lg:-top-32 max-md:hidden"
      />
    </div>
  );
}
