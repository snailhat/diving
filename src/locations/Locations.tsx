import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useState } from "react";
import LocationsMap from "./LocationsMap";
import LocationsTable from "./LocationsTable";

export default function Locations() {
  const [showMap, setShowMap] = useState(false);
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={showMap}
              onChange={(e) => setShowMap(e.target.checked)}
            />
          }
          label="Show Map"
        />
      </FormGroup>
      {!showMap && <LocationsTable />}
      {showMap && <LocationsMap />}
    </div>
  );
}
