import * as React from "react";
import { Marker, InfoWindow } from "react-google-maps";
import { WaterInfoWindow } from "./window/WaterInfoWindow";

// @ts-ignore
import image from "../../../../resources/icons/water-3.png?jimp&size=40&rotate=180";
import { Incident } from "../../shared/types";

interface GeoPosition {
  lat: number;
  lng: number;
}

interface WaterMarkerProps {
  position: GeoPosition;
  incident?: Incident;
  animation?: google.maps.Animation;
  isSelected: boolean;
  onSelect?: () => void;
  onClose?: () => void;
}

const WaterMarker = ({
  position,
  incident,
  animation,
  isSelected,
  onSelect,
  onClose,
}: WaterMarkerProps) => (
  <Marker position={position} icon={image.src} defaultAnimation={animation} onClick={onSelect}>
    {isSelected && !!incident && (
      <InfoWindow onCloseClick={onClose}>
        <WaterInfoWindow incident={incident} />
      </InfoWindow>
    )}
  </Marker>
);

export { WaterMarker };
