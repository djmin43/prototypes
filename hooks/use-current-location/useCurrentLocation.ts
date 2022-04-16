import { useState, useEffect } from "react";

interface Coords {
  currentLatitude: number;
  currentLongitude: number;
}

export function useCurrentLocation(): Coords {
  const [currentLongitude, setCurrentLongitude] = useState<number>(0);
  const [currentLatitude, setCurrentLatitude] = useState<number>(0);

  useEffect(() => {
    const geoLocation: Geolocation = navigator.geolocation;
    geoLocation.getCurrentPosition((pos): void => {
      setCurrentLatitude(pos.coords.latitude);
      setCurrentLongitude(pos.coords.longitude);
    });
    geoLocation.watchPosition((pos): void => {
      setCurrentLatitude(pos.coords.latitude);
      setCurrentLongitude(pos.coords.longitude);
    });
  }, [currentLatitude, currentLongitude]);

  return {
    currentLatitude,
    currentLongitude,
  };
}
