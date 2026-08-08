import { FormControlLabel, FormGroup, Switch } from "@mui/material";

export default function MapToggle({
  showMap,
  setShowMap,
}: {
  showMap: boolean;
  setShowMap: (value: boolean) => void;
}) {
  return (
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
  );
}
