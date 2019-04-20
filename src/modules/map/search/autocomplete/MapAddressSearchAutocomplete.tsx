import * as React from "react";
import Select, { components } from "react-select";
import { createStyles, withStyles, WithStyles } from "@material-ui/core";

const styles = createStyles({
  autocomplete: {
    top: 0,
    width: "100%",
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "10px",
  },
  select: {
    flex: 1,
  },
});

export interface AutocompleteSuggestion {
  id: string;
  description: string;
  placeId: string;
  active: boolean;
  index: number;
  formattedSuggestion: string;
  matchedSubstrings: google.maps.places.PredictionSubstring[];
  terms: google.maps.places.PredictionTerm[];
  types: string[];
}

export interface MapAddressSearchAutocompleteProps extends WithStyles<typeof styles> {
  suggestions: AutocompleteSuggestion[];
  loading: boolean;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setSelectedSearchLocation: (suggestion: AutocompleteSuggestion) => void;
}

console.log(components.Input);

const MapAddressSearchAutocompleteBase = ({
  classes,
  suggestions,
  searchTerm,
  setSearchTerm,
  setSelectedSearchLocation,
  loading,
}: MapAddressSearchAutocompleteProps) => (
  <div className={classes.autocomplete}>
    <Select
      className={classes.select}
      options={suggestions}
      onChange={val => setSelectedSearchLocation(val as AutocompleteSuggestion)}
      getOptionLabel={suggestion => suggestion.description}
      getOptionValue={suggestion => suggestion.placeId}
      isLoading={loading}
      loadingMessage={() => "Carregando..."}
      inputValue={searchTerm}
      onInputChange={term => setSearchTerm(term)}
      noOptionsMessage={() => "Nenhum resultado encontrado"}
      placeholder="Busque uma localidade..."
    />
  </div>
);

const MapAddressSearchAutocomplete = withStyles(styles)(MapAddressSearchAutocompleteBase);

export { MapAddressSearchAutocomplete };
