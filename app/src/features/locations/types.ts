import type { GeoPoint } from "firebase/firestore";

export interface LocationData {
  name: string;
  address: string;
  geopoint: GeoPoint;
}

export interface LocationWithId extends LocationData {
  id: string;
}

export type LocationsProps = {
  locations: LocationWithId[];
};
