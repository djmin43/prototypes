// reference: https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula

export function useCalculateDistance(
  latitudeOne: number,
  longtidueOne: number,
  latitudeTwo: number,
  longitudeTwo: number
): number {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(latitudeTwo - latitudeOne); // deg2rad below
  const dLon = deg2rad(longitudeTwo - longtidueOne);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(latitudeOne)) *
      Math.cos(deg2rad(latitudeTwo)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}
