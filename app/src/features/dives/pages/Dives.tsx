import ContentBox from "@/shared/components/ContentBox";
import MapToggle from "@/shared/components/MapToggle";
import { useState } from "react";
import DivesMap from "../components/DivesMap";
import DivesTable from "../components/DivesTable";

export default function Dives() {
  const [showMap, setShowMap] = useState(false);
  return (
    <ContentBox>
      <MapToggle showMap={showMap} setShowMap={setShowMap} />
      {!showMap && <DivesTable />}
      {showMap && <DivesMap />}
    </ContentBox>
  );
}
