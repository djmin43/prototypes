import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useCurrentLocation } from "../hooks/use-current-location";

const Home: NextPage = () => {
  const { currentLatitude, currentLongitude } = useCurrentLocation();
  return (
    <section>
      <p>latitude: {currentLatitude}</p>
      <p>longitude: {currentLongitude}</p>
      <div>
        <h1>김종찬 만두</h1>
      </div>
      <div>
        <span>고기만두</span>
        <span>100만원</span>
      </div>
    </section>
  );
};

export default Home;
