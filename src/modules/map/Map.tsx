import * as React from "react";
import { MutationFn } from "react-apollo";
import { GoogleMap } from "react-google-maps";
import { CreateIncidentInput, IncidentType } from "../../api";
import { toLoc, toPos } from "../shared/converters";
import { Incident } from "../shared/types";
import { MapButtons } from "./MapActions";
import { WaterMarker } from "./marker/WaterMarker";
import { MapAddressSearch } from "./search/MapAddressSearch";
import { MapCreateIncidentViewer } from "./viewer/MapCreateIncidentViewer";

export interface MapProps {
  devicePosition: google.maps.LatLngLiteral;
  currentPosition: google.maps.LatLngLiteral;
  setCurrentPosition: (pos: google.maps.LatLngLiteral) => void;
  nearbyIncidents: Incident[];
  createIncident: MutationFn<Incident, { input: CreateIncidentInput }>;
  selectedMarker: string;
  setSelectedMarker: (id: string) => void;
}

const Map = ({
  devicePosition,
  currentPosition,
  setCurrentPosition,
  nearbyIncidents,
  createIncident,
  selectedMarker,
  setSelectedMarker,
}: MapProps) => {
  const mapRef = React.useRef<GoogleMap>(null);
  const [creating, setCreating] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <GoogleMap
      ref={mapRef}
      defaultZoom={15}
      defaultCenter={currentPosition}
      center={currentPosition}
      defaultOptions={{
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        gestureHandling: "greedy",
        styles: [
          {
            featureType: "poi",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
        ],
      }}
      onClick={(e: google.maps.IconMouseEvent) => (e.placeId ? setSelectedMarker(null) : null)}
      onCenterChanged={() => setCurrentPosition(mapRef.current.getCenter().toJSON())}
    >
      <MapAddressSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSelectedSearchLocation={(result: google.maps.GeocoderResult) => {
          console.log(result);
          setCurrentPosition(result.geometry.location.toJSON());
        }}
      />
      {nearbyIncidents.map(item => (
        <WaterMarker
          key={item.id}
          incident={item}
          position={toPos(item.location)}
          reporter="Desconhecido"
          isSelected={selectedMarker === item.id}
          onSelect={() => setSelectedMarker(item.id)}
          onClose={() => setSelectedMarker(null)}
        />
      ))}
      <MapCreateIncidentViewer creating={creating} currentPosition={currentPosition} />
      <MapButtons
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
