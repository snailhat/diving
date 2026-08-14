import ContentBox from "@/common/ContentBox";
import MapToggle from "@/common/MapToggle";
import { useState } from "react";
import LocationsMap from "./LocationsMap";
import LocationsTable from "./LocationsTable";

export default function Locations() {
  const [showMap, setShowMap] = useState(false);
  return (
    <ContentBox>
      <MapToggle showMap={showMap} setShowMap={setShowMap} />
      {!showMap && <LocationsTable />}
      {showMap && <LocationsMap />}
    </ContentBox>
  );
}
