import * as React from "react";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import { Incident } from "../../shared/types";
import { toPos } from "../../shared/converters";
import { WaterMarker } from "../marker/WaterMarker";

export interface MapListIncidentMarkersViewerProps {
  incidents: Incident[];
  selectedMarker: string;
  setSelectedMarker: (id: string) => void;
}

const MapListIncidentMarkersViewer = ({
  incidents,
  selectedMarker,
  setSelectedMarker,
}: MapListIncidentMarkersViewerProps) => (
  <MarkerClusterer
    averageCenter
    enableRetinaIcons
    defaultMaxZoom={15}
    defaultGridSize={40}
    gridSize={40}
    maxZoom={15}
    defaultMinimumClusterSize={3}
  >
    {incidents.map(item => (
      <WaterMarker
        key={item.id}
        incident={item}
        position={toPos(item.location)}
        isSelected={selectedMarker === item.id}
        onSelect={() => setSelectedMarker(item.id)}
        onClose={() => setSelectedMarker(null)}
      />
    ))}
  </MarkerClusterer>
);

export { MapListIncidentMarkersViewer };
