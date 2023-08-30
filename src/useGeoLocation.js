import { useEffect, useState } from "react";

export function useGeoLocation() {
  const [location, setLocation] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation([position.coords.latitude, position.coords.longitude]);
        setLoading(false);
      });
    } else {
      console.log("no object");
    }
  }, []);

  return [location, isLoading];
}
