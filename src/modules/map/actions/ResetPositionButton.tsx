import * as React from "react";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider,
  createStyles,
  WithStyles,
} from "@material-ui/core/styles";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import Fab from "@material-ui/core/Fab";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
  typography: {
    useNextVariants: true,
  },
});

const styles = theme =>
  createStyles({
    fab: {
      margin: theme.spacing.unit,
    },
  });

export interface ResetPositionButtonProps extends WithStyles<typeof styles> {
  resetPosition: () => void;
}

const ResetPositionButtonBase = ({ resetPosition, classes }: ResetPositionButtonProps) => (
  <MuiThemeProvider theme={theme}>
    <Fab
      aria-label="Reset position"
      color="default"
      className={classes.fab}
      onClick={resetPosition}
    >
      <GpsFixedIcon />
    </Fab>
  </MuiThemeProvider>
);

const ResetPositionButton = withStyles(styles)(ResetPositionButtonBase);

export { ResetPositionButton };
