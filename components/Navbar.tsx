"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignInButton from "./SignInButton";

type Link = {
  title: string;
  url: string;
};

export default function Navbar() {
  const links: Link[] = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Recipes",
      url: "/recipes",
    },
  ];
  const pathname = usePathname();

  return (
    <nav className="w-screen relative flex flex-row items-center justify-between px-8 py-4 border-b border-neutral-300 ">
      <Image
        src={"/images/logo.svg"}
        width={260}
        height={40}
        alt="website recipe finder logo"
      />

      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-row items-center justify-center gap-x-8 font-medium">
        {links.map((link) => {
          const isActive = pathname === link.url;
          return (
            <Link
              key={link.title}
              href={`${link.url}`}
              className={`border-b-2 transition-all duration-150 hover:border-b-2 hover:border-orange-500 font-semibold ${
                isActive ? "border-orange-500" : "border-transparent"
              }`}
            >
              {link.title}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-x-8">
        <SignInButton />
        <Link
          href="/recipes"
          className="bg-neutral-900 text-white px-3 py-2 rounded-lg text-lg font-bold"
        >
          Browse recipes
        </Link>
      </div>
    </nav>
  );
}
