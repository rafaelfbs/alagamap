import * as React from "react";
import { MapAddressSearch } from "../search/MapAddressSearch";

export interface MapAddressSearchViewerProps {
  setSelectedSearchLocation: (position: google.maps.LatLngLiteral) => void;
}

const MapAddressSearchViewer = ({ setSelectedSearchLocation }: MapAddressSearchViewerProps) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <MapAddressSearch
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      setSelectedSearchLocation={setSelectedSearchLocation}
    />
  );
};

export { MapAddressSearchViewer };
