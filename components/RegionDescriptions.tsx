"use client";

import { useState } from "react";

interface RegionDescriptionProps {
  title: string;
  description: string;
}

export function RegionDescriptions({
  title,
  description,
}: RegionDescriptionProps) {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const handleRegionClick = (region: string) => {
    setSelectedRegion(region);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
