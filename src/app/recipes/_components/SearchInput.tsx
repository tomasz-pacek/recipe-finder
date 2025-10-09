"use client";

import { Suspense } from "react";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function SearchInputContent() {
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search, 500);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedSearch.trim()) {
      params.set("q", debouncedSearch);
    } else {
      params.delete("q");
    }

    router.push(`?${params.toString()}`);
  }, [debouncedSearch, router, searchParams]);

  return (
    <div className="relative w-69 ">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Image
          src="/images/icon-search.svg"
          width={20}
          height={20}
          alt="search icon"
        />
      </div>
      <Input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name or ingredient..."
        className="pl-10 placeholder:text-base placeholder:text-neutral-900 bg-white"
      />
    </div>
  );
}

export default function SearchInput() {
  return (
    <Suspense
      fallback={
        <div className="h-10 w-full bg-gray-200 animate-pulse rounded" />
      }
    >
      <SearchInputContent />
    </Suspense>
  );
}
