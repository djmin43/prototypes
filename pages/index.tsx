import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useCurrentLocation } from "../hooks/use-current-location";

const Home: NextPage = () => {
  const { currentLatitude, currentLongitude } = useCurrentLocation();
  return (
    <section>
      <p>latitude: {currentLatitude}</p>
      <p>longitude: {currentLongitude}</p>
    </section>
  );
};

export default Home;
