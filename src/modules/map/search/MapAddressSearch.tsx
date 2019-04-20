import * as React from "react";
import PlacesAutocomplete, { geocodeByPlaceId } from "react-places-autocomplete";
import {
  AutocompleteSuggestion,
  MapAddressSearchAutocomplete,
} from "./autocomplete/MapAddressSearchAutocomplete";

export interface MapAddressSearchProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  setSelectedSearchLocation: (place: google.maps.GeocoderResult) => void;
}

interface PlacesAutocompleteRenderProps {
  loading: boolean;
  suggestions: AutocompleteSuggestion[];
  getInputProps: () => React.AllHTMLAttributes<HTMLInputElement>;
  getSuggestionItemProps: (
    suggestion: AutocompleteSuggestion,
  ) => React.AllHTMLAttributes<HTMLDivElement>;
}

const renderAutocomplete = (props: PlacesAutocompleteRenderProps) => {
  const { value, onChange } = props.getInputProps();

  return (
    <MapAddressSearchAutocomplete
      suggestions={props.suggestions}
      setSelectedSearchLocation={suggestion =>
        props.getSuggestionItemProps(suggestion).onClick({} as any)
      }
      searchTerm={value as string}
      setSearchTerm={(value: string) => onChange({ target: { value } } as any)}
      loading={props.loading}
    />
  );
};

const MapAddressSearch = ({
  searchTerm,
  setSearchTerm,
  setSelectedSearchLocation,
}: MapAddressSearchProps) => (
  <PlacesAutocomplete
    value={searchTerm}
    onChange={term => setSearchTerm(term)}
    onSelect={async (address: string, placeId: string) => {
      if (!placeId) return;
      const geocode = (await geocodeByPlaceId(placeId)) as google.maps.GeocoderResult[];
      setSelectedSearchLocation(geocode[0]);
    }}
  >
    {renderAutocomplete}
  </PlacesAutocomplete>
);

export { MapAddressSearch };
