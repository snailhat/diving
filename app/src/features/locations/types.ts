import type { GeoPoint } from "firebase/firestore";

export interface LocationData {
  name: string;
  address: string;
  geopoint: GeoPoint;
  stats: {
    total_dives: number
  }
}

export interface LocationWithId extends LocationData {
  id: string;
}

export type LocationsProps = {
  locations: LocationWithId[];
};
