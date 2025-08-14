import { RussianMap } from "@/components/RussianMap";
import { RegionDescriptions } from "@/components/RegionDescriptions";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-4 space-x-4">
      <div className="w-full md:w-1/2">
        <RussianMap />
      </div>
      <div className="w-full md:w-1/2">
        <RegionDescriptions title="Region 1" description="Description 1" />
      </div>
    </div>
  );
}
