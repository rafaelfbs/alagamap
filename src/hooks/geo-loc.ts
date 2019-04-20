import { useState, useEffect } from "react";

const useGeoLoc = () => {
  const [geoLocState, setGeoLocState] = useState({
    loaded: false,
    position: null,
    error: null,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
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
    );
  }, []);

  return geoLocState;
};

export { useGeoLoc };
