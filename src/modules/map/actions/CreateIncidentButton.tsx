import * as React from "react";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider,
  createStyles,
  WithStyles,
} from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import DoneIcon from "@material-ui/icons/Done";
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

export interface CreateIncidentButtonProps extends WithStyles<typeof styles> {
  creating: boolean;
  startCreation?: () => void;
  finishCreation?: () => void;
}

const CreateIncidentButtonBase = ({
  creating,
  startCreation,
  finishCreation,
  classes,
}: CreateIncidentButtonProps) => (
  <MuiThemeProvider theme={theme}>
    <Fab
      aria-label={!creating ? "Add" : "Confirm"}
      color={!creating ? "primary" : "secondary"}
      className={classes.fab}
      onClick={() => (!creating ? startCreation() : finishCreation())}
    >
      {!creating ? <AddIcon /> : <DoneIcon />}
    </Fab>
  </MuiThemeProvider>
);

const CreateIncidentButton = withStyles(styles)(CreateIncidentButtonBase);

export { CreateIncidentButton };
