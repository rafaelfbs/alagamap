import * as React from "react";
import { Map } from "./Map";
import { withGoogleMap, withScriptjs } from "react-google-maps";

const GOOGLE_MAPS_URL =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyCl2LdcNSsN2M8wycnuufBlTgi0nolsMNE&v=3.exp&libraries=geometry,drawing,places";

const MapComponent = typeof window === "undefined" ? Map : withScriptjs(withGoogleMap(Map));

const MapManager = ({ loggedInUser }: { loggedInUser: string }) => {
  return (
    <MapComponent
      loggedInUser={loggedInUser}
      googleMapURL={GOOGLE_MAPS_URL}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ flex: 1 }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

export { MapManager };
