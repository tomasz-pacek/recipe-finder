"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import SignInButton from "./SignInButton";
import { Button } from "@/components/ui/button";

type LinkType = {
  title: string;
  url: string;
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links: LinkType[] = [
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
    <>
      <nav className="w-screen relative flex flex-row items-center justify-between px-4 md:px-8 py-4 border-b border-neutral-300">
        {/* Logo */}
        <Image
          src={"/images/logo.svg"}
          width={260}
          height={40}
          alt="website recipe finder logo"
          className="z-20 w-[180px] h-[28px] md:w-[260px] md:h-[40px]"
        />

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 flex-row items-center justify-center gap-x-8 font-medium">
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

        {/* Desktop Actions - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-x-8">
          <SignInButton />
          <Link
            href="/recipes"
            className="bg-neutral-900 text-white px-3 py-2 rounded-lg text-lg font-bold"
          >
            Browse recipes
          </Link>
        </div>

        {/* Mobile Hamburger Button */}

        <div className="flex items-center justify-center gap-x-2 md:hidden">
          <SignInButton />
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-20 p-2"
            variant="ghost"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-white z-99999 px-4 py-6 flex flex-col gap-6">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-4">
            {links.map((link) => {
              const isActive = pathname === link.url;
              return (
                <Link
                  key={link.title}
                  href={`${link.url}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-xl font-semibold py-2 border-b-2 transition-all duration-150 ${
                    isActive
                      ? "border-orange-500 text-orange-500"
                      : "border-transparent"
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>

          {/* Mobile Actions */}
          <div className="flex flex-col gap-4 ">
            <Link
              href="/recipes"
              onClick={() => setIsMenuOpen(false)}
              className="bg-neutral-900 text-white px-4 py-3 rounded-lg text-lg font-bold text-center"
            >
              Browse recipes
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
