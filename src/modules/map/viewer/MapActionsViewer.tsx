import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import * as React from "react";
import { CreateIncidentButton } from "../actions/CreateIncidentButton";
import { ResetPositionButton } from "../actions/ResetPositionButton";

const styles = createStyles({
  fabContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    zIndex: 999,
  },
});

export interface MapActionsViewerProps extends WithStyles<typeof styles> {
  currentPosition: google.maps.LatLngLiteral;
  currentRange: number;
  loggedInUser: string;
  startCreation: () => void;
  resetPosition: () => void;
}

const MapActionsViewerBase = ({ classes, startCreation, resetPosition }: MapActionsViewerProps) => (
  <div className={classes.fabContainer}>
    <ResetPositionButton resetPosition={resetPosition} />
    <CreateIncidentButton creating={false} startCreation={startCreation} />
  </div>
);

const MapActionsViewer = withStyles(styles)(MapActionsViewerBase);

export { MapActionsViewer };
