import * as React from "react";
import { GoogleMap } from "react-google-maps";
import { Query } from "react-apollo";
import { MapActionsViewer } from "./viewer/MapActionsViewer";
import { MapAddressSearchViewer } from "./viewer/MapAddressSearchViewer";
import { MapCreateIncidentViewer } from "./viewer/MapCreateIncidentViewer";
import {
  MapListIncidentMarkersViewer,
  MapListIncidentMarkersViewerQuery,
} from "./viewer/MapListIncidentMarkersViewer";
import { useGeoLoc } from "../../hooks/geo-loc";
import { toLoc } from "../shared/converters";
import throttle from "lodash/throttle";

const DEFAULT_MAP_OPTIONS = {
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false,
  gestureHandling: "greedy" as google.maps.GestureHandlingOptions,
  styles: [
    {
      featureType: "poi" as google.maps.MapTypeStyleFeatureType,
      elementType: "labels.icon" as google.maps.MapTypeStyleElementType,
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ],
};

export interface MapProps {
  loggedInUser: string;
}

const getRange = (bounds: google.maps.LatLngBounds) =>
  Math.ceil(
    google.maps.geometry.spherical.computeDistanceBetween(
      bounds.getNorthEast(),
      bounds.getCenter(),
    ) / 1000,
  );

const throttleQuery = throttle(fn => fn(), 500);

const Map = ({ loggedInUser }: MapProps) => {
  const mapRef = React.useRef<GoogleMap>(null);
  const geo = useGeoLoc();
  const [creating, setCreating] = React.useState(false);
  const [selectedMarker, setSelectedMarker] = React.useState(null);
  const [queryVars, setQueryVars] = React.useState({ center: geo.position, range: 5 });

  const devicePosition = !geo.loaded || geo.error ? { lat: -22, lng: -45 } : geo.position;
  const currentPosition = queryVars.center || devicePosition;
  const currentRange = queryVars.range;
  const yesterday = [new Date()].map(d => (d.setDate(d.getDate() - 1), d))[0].toISOString();

  return (
    <GoogleMap
      ref={mapRef}
      defaultZoom={15}
      defaultCenter={devicePosition}
      defaultOptions={DEFAULT_MAP_OPTIONS}
      onClick={(e: google.maps.IconMouseEvent) => (e.placeId ? setSelectedMarker(null) : null)}
      onCenterChanged={() => {
        const center = mapRef.current.getCenter().toJSON();
        const range = getRange(mapRef.current.getBounds());
        throttleQuery(() => {
          setQueryVars({ center, range });
        });
      }}
    >
      <MapAddressSearchViewer
        setSelectedSearchLocation={position => mapRef.current.panTo(position)}
      />
      <Query
        query={MapListIncidentMarkersViewerQuery}
        variables={{
          location: toLoc(currentPosition),
          km: currentRange,
          createdAt: yesterday,
        }}
        pollInterval={10000}
      >
        {({ data }) => (
          <MapListIncidentMarkersViewer
            incidents={(data && data.nearbyIncidents && data.nearbyIncidents.items) || []}
            currentPosition={currentPosition}
            currentRange={currentRange}
            loggedInUser={loggedInUser}
            selectedMarker={selectedMarker}
            setSelectedMarker={setSelectedMarker}
          />
        )}
      </Query>
      <MapCreateIncidentViewer
        creating={creating}
        currentPosition={currentPosition}
        loggedInUser={loggedInUser}
      />
      <MapActionsViewer
        currentPosition={currentPosition}
        currentRange={currentRange}
        loggedInUser={loggedInUser}
        creating={creating}
        startCreation={() => setCreating(true)}
        finishCreation={() => setCreating(false)}
        resetPosition={() => mapRef.current.panTo(devicePosition)}
      />
    </GoogleMap>
  );
};

export { Map };
