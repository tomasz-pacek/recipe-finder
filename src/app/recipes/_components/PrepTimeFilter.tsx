"use client";

import { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

function PrepTimeFilterContent() {
  const [selectedTime, setSelectedTime] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (value: string) => {
    setSelectedTime(value);
    const params = new URLSearchParams(searchParams.toString());
    params.set("prep", value);
    router.push(`?${params.toString()}`);
  };

  const handleClear = () => {
    setSelectedTime("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("prep");
    router.push(`?${params.toString()}`);
    setIsOpen(false);
  };

  return (
    <Select
      value={selectedTime}
      name="prep"
      onValueChange={handleChange}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SelectTrigger className="font-semibold text-base text-neutral-900 bg-white">
        <SelectValue placeholder="Max Prep Time" />
      </SelectTrigger>
      <SelectContent className="font-medium ">
        <SelectItem value="0">0 minutes</SelectItem>
        <SelectItem value="5">5 minutes</SelectItem>
        <SelectItem value="10">10 minutes</SelectItem>
        <Button
          variant="outline"
          className="border-none px-2 py-0 hover:bg-transparent cursor-pointer"
          onClick={handleClear}
        >
          Clear
        </Button>
      </SelectContent>
    </Select>
  );
}

export default function PrepTimeFilter() {
  return (
    <Suspense
      fallback={<div className="h-10 w-40 bg-gray-200 animate-pulse rounded" />}
    >
      <PrepTimeFilterContent />
    </Suspense>
  );
}
