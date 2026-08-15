import { db } from "@/firebase";
import ContentBox from "@/shared/components/ContentBox";
import MapToggle from "@/shared/components/MapToggle";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import LocationsMap from "../components/LocationsMap";
import LocationsTable from "../components/LocationsTable";
import type { LocationData, LocationWithId } from "../types";

async function getLocations(): Promise<LocationWithId[]> {
  const querySnapshot = await getDocs(collection(db, "locations"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as LocationData),
  }));
}

export default function Locations() {
  const [showMap, setShowMap] = useState(false);
  const [locations, setLocations] = useState<LocationWithId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLocations()
      .then(setLocations)
      .finally(() => setLoading(false));
  }, []);
  return (
    <ContentBox>
      <MapToggle showMap={showMap} setShowMap={setShowMap} />
      {loading ? (
        <p>Loading...</p>
      ) : showMap ? (
        <LocationsMap locations={locations} />
      ) : (
        <LocationsTable locations={locations} />
      )}
    </ContentBox>
  );
}
