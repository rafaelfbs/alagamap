import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import { WaterMarker } from "../marker/WaterMarker";

const style = createStyles({
  infoText: {
    top: "70px",
    width: "calc(100% - 10px)",
    position: "absolute",
    textAlign: "center",
    fontFamily: "roboto",
    fontSize: "13px",
    backgroundColor: "white",
    margin: "5px",
    padding: "10px 0",
  },
});

export interface MapCreateIncidentViewerProps extends WithStyles<typeof style> {
  creating: boolean;
  currentPosition: google.maps.LatLngLiteral;
  loggedInUser: string;
}

const MapCreateIncidentViewerBase = ({
  creating,
  currentPosition,
  classes,
  loggedInUser,
}: MapCreateIncidentViewerProps) =>
  creating && (
    <React.Fragment>
      <div className={classes.infoText}>
        CLIQUE NO MARCADOR OU MOVA A TELA PARA O LOCAL DO INCIDENTE
      </div>
      <WaterMarker
        animation={google.maps.Animation.DROP}
        position={currentPosition}
        isSelected={false}
        loggedInUser={loggedInUser}
      />
    </React.Fragment>
  );

const MapCreateIncidentViewer = withStyles(style)(MapCreateIncidentViewerBase);

export { MapCreateIncidentViewer };
