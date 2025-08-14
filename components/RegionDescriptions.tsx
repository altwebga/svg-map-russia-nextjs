"use client";

interface RegionDescriptionsProps {
  selected: { title: string; code: string } | null;
  descriptions: Record<string, string>;
}

export function RegionDescriptions({ selected, descriptions }: RegionDescriptionsProps) {
  if (!selected) {
    return <div className="p-4">Выберите регион на карте</div>;
  }

  return (
    <div className="p-4">
      <h2 className="mb-2 text-xl font-bold">{selected.title}</h2>
      <p>{descriptions[selected.code] ?? `Описание для ${selected.title} отсутствует`}</p>
    </div>
  );
}
