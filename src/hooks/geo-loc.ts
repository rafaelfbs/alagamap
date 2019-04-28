import { useState, useEffect } from "react";

const useGeoLoc = () => {
  const [geoLocState, setGeoLocState] = useState({
    loaded: false,
    position: null,
    error: null,
  });

  useEffect(() => {
    navigator.geolocation.watchPosition(
      position =>
        setGeoLocState({
          loaded: true,
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          error: null,
        }),
      error => setGeoLocState({ loaded: true, error, position: null }),
      { enableHighAccuracy: true },
    );
  }, []);

  return geoLocState;
};

export { useGeoLoc };
