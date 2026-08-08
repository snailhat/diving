import MapToggle from "@/common/MapToggle";
import { useState } from "react";
import LocationsMap from "./LocationsMap";
import LocationsTable from "./LocationsTable";

export default function Locations() {
  const [showMap, setShowMap] = useState(false);
  return (
    <div>
      <MapToggle showMap={showMap} setShowMap={setShowMap} />
      {!showMap && <LocationsTable />}
      {showMap && <LocationsMap />}
    </div>
  );
}
