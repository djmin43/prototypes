import { useState, useEffect } from "react";
// reference: https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula

export function useCalculateDistance(
  latitudeOne: number,
  longtidueOne: number,
  latitudeTwo: number,
  longitudeTwo: number
): number {
  const [distance, setDistance] = useState<number>(0);

  useEffect(() => {
    setDistance(
      calculateDistance(latitudeOne, longtidueOne, latitudeTwo, longitudeTwo)
    );
  }, [latitudeOne, longtidueOne, latitudeTwo, longitudeTwo]);

  return distance;
}

function calculateDistance(
  latitudeOne: number,
  longtidueOne: number,
  latitudeTwo: number,
  longitudeTwo: number
): number {
  const R = 6371; // Radius of the earth in km
  const dLat = degToRad(latitudeTwo - latitudeOne); // deg2rad below
  const dLon = degToRad(longitudeTwo - longtidueOne);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degToRad(latitudeOne)) *
      Math.cos(degToRad(latitudeTwo)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}
function degToRad(deg: number): number {
  return deg * (Math.PI / 180);
}
