import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useCurrentLocation, useCalculateDistance } from "../hooks";

interface Coords {
  latitude: number;
  longitude: number;
}

const Home: NextPage = () => {
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
      <p>사무실까지: {distanceToOffice}km </p>
    </section>
  );
};

export default Home;
