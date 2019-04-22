import * as React from "react";
import { Marker, InfoWindow } from "react-google-maps";
import { WaterInfoWindow } from "./window/WaterInfoWindow";

// @ts-ignore
import image from "../../../../resources/icons/water.png?jimp&size=20&rotate=180";
import { Incident } from "../../shared/types";

interface GeoPosition {
  lat: number;
  lng: number;
}

interface WaterMarkerProps {
  position: GeoPosition;
  incident?: Incident;
  reporter: string;
  isSelected: boolean;
  onSelect?: () => void;
  onClose?: () => void;
}

const WaterMarker = ({
  position,
  incident,
  reporter,
  isSelected,
  onSelect,
  onClose,
}: WaterMarkerProps) => (
  <Marker position={position} icon={image.src} onClick={onSelect}>
    {isSelected && !!incident && (
      <InfoWindow onCloseClick={onClose}>
        <WaterInfoWindow incident={incident} reporter={reporter} />
      </InfoWindow>
    )}
  </Marker>
);

export { WaterMarker };
