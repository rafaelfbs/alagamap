import * as React from "react";
import { MutationFn } from "react-apollo";
import { GoogleMap } from "react-google-maps";
import { CreateIncidentInput, IncidentType } from "../../api";
import { toLoc } from "../shared/converters";
import { Incident } from "../shared/types";
import { MapActionsViewer } from "./viewer/MapActionsViewer";
import { MapAddressSearchViewer } from "./viewer/MapAddressSearchViewer";
import { MapCreateIncidentViewer } from "./viewer/MapCreateIncidentViewer";
import { MapListIncidentMarkersViewer } from "./viewer/MapListIncidentMarkersViewer";

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
  devicePosition: google.maps.LatLngLiteral;
  currentPosition: google.maps.LatLngLiteral;
  setCurrentPosition: (pos: google.maps.LatLngLiteral) => void;
  setCurrentBounds: (bounds: google.maps.LatLngBounds) => void;
  nearbyIncidents: Incident[];
  createIncident: MutationFn<Incident, { input: CreateIncidentInput }>;
}

const Map = ({
  devicePosition,
  currentPosition,
  setCurrentPosition,
  setCurrentBounds,
  nearbyIncidents,
  createIncident,
}: MapProps) => {
  const mapRef = React.useRef<GoogleMap>(null);
  const [creating, setCreating] = React.useState(false);
  const [selectedMarker, setSelectedMarker] = React.useState(null);

  return (
    <GoogleMap
      ref={mapRef}
      defaultZoom={15}
      defaultCenter={currentPosition}
      center={currentPosition}
      defaultOptions={DEFAULT_MAP_OPTIONS}
      onClick={(e: google.maps.IconMouseEvent) => (e.placeId ? setSelectedMarker(null) : null)}
      onCenterChanged={() => setCurrentPosition(mapRef.current.getCenter().toJSON())}
      onBoundsChanged={() => setCurrentBounds(mapRef.current.getBounds())}
    >
      <MapAddressSearchViewer setSelectedSearchLocation={setCurrentPosition} />
      <MapListIncidentMarkersViewer
        incidents={nearbyIncidents}
        selectedMarker={selectedMarker}
        setSelectedMarker={setSelectedMarker}
      />
      <MapCreateIncidentViewer creating={creating} currentPosition={currentPosition} />
      <MapActionsViewer
        creating={creating}
        startCreation={() => setCreating(true)}
        finishCreation={async () => {
          await createIncident({
            variables: {
              input: {
                incidentType: IncidentType.FLOOD,
                location: toLoc(currentPosition),
              },
            },
          });
          setCreating(false);
        }}
        resetPosition={() => setCurrentPosition(devicePosition)}
      />
    </GoogleMap>
  );
};

export { Map };
