import { useState, useEffect } from "react";

function createPositionState(error, position, loaded) {
  return {
    loaded,
    position: position && {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    },
    error: error,
  };
}

const useGeoLoc = () => {
  const [geoLocState, setGeoLocState] = useState(createPositionState(null, null, false));

  useEffect(() => {
    const setPos = position => setGeoLocState(createPositionState(null, position, true));
    const setError = error => setGeoLocState(createPositionState(error, null, true));

    navigator.geolocation.getCurrentPosition(setPos, setError);
    const observer = navigator.geolocation.watchPosition(setPos, setError);

    return () => {
      navigator.geolocation.clearWatch(observer);
    };
  }, []);

  return geoLocState;
};

export { useGeoLoc };
