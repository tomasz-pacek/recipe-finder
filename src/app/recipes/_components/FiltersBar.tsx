"use client";

import CookTimeFilter from "./CookTimeFilter";
import PrepTimeFilter from "./PrepTimeFilter";
import SearchInput from "./SearchInput";

export default function FiltersBar() {
  return (
    <div className="w-full flex flex-row items-center justify-between mt-8  ">
      <div className="flex flex-row items-center justify-center gap-x-4 ">
        <PrepTimeFilter />
        <CookTimeFilter />
      </div>
      <SearchInput />
    </div>
  );
}
