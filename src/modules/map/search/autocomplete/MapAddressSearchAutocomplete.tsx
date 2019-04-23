import {
  createStyles,
  MenuItem,
  Paper,
  TextField,
  Typography,
  withStyles,
  WithStyles,
  WithTheme,
} from "@material-ui/core";
import { InputBaseComponentProps } from "@material-ui/core/InputBase";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import * as React from "react";
import Select from "react-select";
import { ContainerProps, ValueContainerProps } from "react-select/lib/components/containers";
import { ControlProps } from "react-select/lib/components/Control";
import { MenuProps, NoticeProps } from "react-select/lib/components/Menu";
import { OptionProps } from "react-select/lib/components/Option";
import { PlaceholderProps } from "react-select/lib/components/Placeholder";
import { SingleValueProps } from "react-select/lib/components/SingleValue";

const styles = theme =>
  createStyles({
    root: {
      position: "absolute",
      top: 0,
      width: "100%",
    },
    input: {
      display: "flex",
      padding: 0,
    },
    selectContainer: {
      padding: "10px",
      margin: "10px",
      background: "white",
    },
    valueContainer: {
      display: "flex",
      flexWrap: "wrap",
      flex: 1,
      alignItems: "center",
      overflow: "hidden",
    },
    chip: {
      margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    },
    chipFocused: {
      backgroundColor: emphasize(
        theme.palette.type === "light" ? theme.palette.grey[300] : theme.palette.grey[700],
        0.08,
      ),
    },
    noOptionsMessage: {
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    loadingMessage: {
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    singleValue: {
      fontSize: 16,
    },
    placeholder: {
      position: "absolute",
      left: 2,
      fontSize: 16,
    },
    paper: {
      position: "absolute",
      zIndex: 1,
      marginTop: theme.spacing.unit,
      left: 0,
      right: 0,
      margin: "0 10px",
    },
    divider: {
      height: theme.spacing.unit * 2,
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

export interface MapAddressSearchAutocompleteProps extends WithStyles<typeof styles>, WithTheme {
  suggestions: AutocompleteSuggestion[];
  loading: boolean;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setSelectedSearchLocation: (suggestion: AutocompleteSuggestion) => void;
}

const NoOptionsMessage = ({
  selectProps,
  innerProps,
  children,
}: NoticeProps<AutocompleteSuggestion>) => (
  <Typography
    color="textSecondary"
    className={selectProps.classes.noOptionsMessage}
    {...innerProps}
  >
    {children}
  </Typography>
);

const LoadingMessage = ({
  selectProps,
  innerProps,
  children,
}: NoticeProps<AutocompleteSuggestion>) => (
  <Typography color="textSecondary" className={selectProps.classes.loadingMessage} {...innerProps}>
    {children}
  </Typography>
);

const IndicatorSeparator = () => <div />;
const DropdownIndicator = () => <div />;

const inputComponent = ({ inputRef, ...props }: InputBaseComponentProps) => (
  // @ts-ignore
  <div ref={inputRef} {...props} />
);

const Control = ({
  selectProps,
  innerProps,
  innerRef,
  children,
}: ControlProps<AutocompleteSuggestion>) => (
  <TextField
    fullWidth
    InputProps={{
      inputComponent,
      inputProps: {
        className: selectProps.classes.input,
        inputRef: innerRef,
        children: children,
        ...innerProps,
      },
    }}
    {...selectProps.textFieldProps}
  />
);

const Option = ({
  innerRef,
  innerProps,
  isFocused,
  isSelected,
  children,
}: OptionProps<AutocompleteSuggestion>) => (
  <MenuItem
    buttonRef={innerRef}
    selected={isFocused}
    component="div"
    style={{
      fontWeight: isSelected ? 500 : 400,
    }}
    {...innerProps}
  >
    {children}
  </MenuItem>
);
const Placeholder = ({
  selectProps,
  innerProps,
  children,
}: PlaceholderProps<AutocompleteSuggestion>) => (
  <Typography color="textSecondary" className={selectProps.classes.placeholder} {...innerProps}>
    {children}
  </Typography>
);

const SingleValue = ({
  selectProps,
  innerProps,
  children,
}: SingleValueProps<AutocompleteSuggestion>) => (
  <Typography className={selectProps.classes.singleValue} {...innerProps}>
    {children}
  </Typography>
);

const ValueContainer = ({ selectProps, children }: ValueContainerProps<AutocompleteSuggestion>) => (
  <div className={selectProps.classes.valueContainer}>{children}</div>
);

const SelectContainer = ({
  selectProps,
  innerProps,
  children,
}: ContainerProps<AutocompleteSuggestion>) => (
  <Paper square className={selectProps.classes.selectContainer} {...innerProps}>
    {children}
  </Paper>
);

const Menu = ({ selectProps, innerProps, children }: MenuProps<AutocompleteSuggestion>) => (
  <Paper square className={selectProps.classes.paper} {...innerProps}>
    {children}
  </Paper>
);

const components = {
  NoOptionsMessage,
  LoadingMessage,
  Control,
  Placeholder,
  SelectContainer,
  ValueContainer,
  Option,
  SingleValue,
  Menu,
  IndicatorSeparator,
  DropdownIndicator,
};

const MapAddressSearchAutocompleteBase = ({
  classes,
  suggestions,
  searchTerm,
  setSearchTerm,
  setSelectedSearchLocation,
  loading,
  theme,
}: MapAddressSearchAutocompleteProps) => {
  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      "& input": {
        font: "inherit",
      },
    }),
  };

  return (
    <div className={classes.root}>
      <Select
        classes={classes}
        styles={selectStyles}
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
        components={components}
      />
    </div>
  );
};

const MapAddressSearchAutocomplete = withStyles(styles, { withTheme: true })(
  MapAddressSearchAutocompleteBase,
);

export { MapAddressSearchAutocomplete };
