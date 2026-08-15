import { Map, Marker } from "@vis.gl/react-google-maps";
import type { LocationsProps } from "./types";

export default function LocationsMap({ locations }: LocationsProps) {
  return (
    <Map
      style={{ width: "100vw", height: "100vh" }}
      defaultCenter={{ lat: 22.54992, lng: 0 }}
      defaultZoom={3}
      gestureHandling="greedy"
      disableDefaultUI
    >
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={{
            lat: location.geopoint.latitude,
            lng: location.geopoint.longitude,
          }}
          title={location.name}
        />
      ))}
    </Map>
  );
}
