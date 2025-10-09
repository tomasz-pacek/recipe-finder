"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function CookTimeFilter() {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (value: string) => {
    setSelectedValue(value);
    const params = new URLSearchParams(searchParams.toString());
    params.set("cook", value);
    router.push(`?${params.toString()}`);
  };

  const handleClear = () => {
    setSelectedValue("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("cook");
    router.push(`?${params.toString()}`);
    setIsOpen(false);
  };
  return (
    <>
      <Select
        value={selectedValue}
        onValueChange={handleChange}
        open={isOpen}
        onOpenChange={setIsOpen}>
        <SelectTrigger className="font-semibold text-base text-neutral-900 bg-white">
          <SelectValue placeholder="Max Cook Time" />
        </SelectTrigger>
        <SelectContent className="font-medium">
          <SelectItem value="0">0 minutes</SelectItem>
          <SelectItem value="5">5 minutes</SelectItem>
          <SelectItem value="10">10 minutes</SelectItem>
          <SelectItem value="15">15 minutes</SelectItem>
          <SelectItem value="20">20 minutes</SelectItem>
          <Button
            onClick={handleClear}
            variant="outline"
            className="border-none px-2 py-0 hover:bg-transparent cursor-pointer">
            Clear
          </Button>
        </SelectContent>
      </Select>
    </>
  );
}
