import MapToggle from "@/common/MapToggle";
import { useState } from "react";
import DivesMap from "./DivesMap";
import DivesTable from "./DivesTable";

export default function Dives() {
  const [showMap, setShowMap] = useState(false);
  return (
    <div>
      <MapToggle showMap={showMap} setShowMap={setShowMap} />
      {!showMap && <DivesTable />}
      {showMap && <DivesMap />}
    </div>
  );
}
