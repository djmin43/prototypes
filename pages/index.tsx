import type { NextPage } from "next";
import { useCurrentLocation, useCalculateDistance } from "../hooks";

interface Coords {
  latitude: number;
  longitude: number;
}

const Home: NextPage = () => {
  console.log(this);
  const officeCoordinates: Coords = {
    latitude: 37.517464,
    longitude: 127.040718,
  };
  const { currentLatitude, currentLongitude } = useCurrentLocation();

  const distanceToOffice = useCalculateDistance(
    currentLatitude,
    currentLongitude,
    officeCoordinates.latitude,
    officeCoordinates.longitude
  );

  return (
    <section>
      <p>latitude: {currentLatitude}</p>
      <p>longitude: {currentLongitude}</p>
      <p>
        사무실까지:
        {currentLatitude === 0 && currentLongitude === 0 ? (
          <span>계산중....</span>
        ) : (
          <span>{distanceToOffice}km</span>
        )}
      </p>
    </section>
  );
};

export default Home;
