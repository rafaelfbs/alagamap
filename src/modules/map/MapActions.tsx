import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import * as React from "react";
import { CreateIncidentButton } from "./actions/CreateIncidentButton";
import { ResetPositionButton } from "./actions/ResetPositionButton";

const styles = createStyles({
  fabContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
  },
});

export interface MapButtonsProps extends WithStyles<typeof styles> {
  creating: boolean;
  startCreation: () => void;
  finishCreation: () => void;
  resetPosition: () => void;
}

const MapButtonsBase = ({
  classes,
  creating,
  startCreation,
  finishCreation,
  resetPosition,
}: MapButtonsProps) => (
  <div className={classes.fabContainer}>
    <ResetPositionButton resetPosition={resetPosition} />
    <CreateIncidentButton
      creating={creating}
      startCreation={startCreation}
      finishCreation={finishCreation}
    />
  </div>
);

const MapButtons = withStyles(styles)(MapButtonsBase);

export { MapButtons };
