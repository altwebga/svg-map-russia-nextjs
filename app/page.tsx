"use client";

import { useState } from "react";
import { RussianMap } from "@/components/RussianMap";
import { RegionDescriptions } from "@/components/RegionDescriptions";
import descriptions from "@/data/region-descriptions.json";

export default function Home() {
  const [selected, setSelected] = useState<{
    title: string;
    code: string;
  } | null>(null);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-4 space-x-4">
      <div className="w-full md:w-1/2">
        <RussianMap onRegionSelect={setSelected} />
      </div>
      <div className="w-full md:w-1/2">
        <RegionDescriptions selected={selected} descriptions={descriptions} />
      </div>
    </div>
  );
}
