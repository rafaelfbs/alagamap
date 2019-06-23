import * as React from "react";
import gql from "graphql-tag";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import { WaterMarker } from "../marker/WaterMarker";
import { Chip } from "@material-ui/core";
import { createIncident } from "../../../api/graphql/mutations";
import { ResetPositionButton } from "../actions/ResetPositionButton";
import { CreateIncidentButton } from "../actions/CreateIncidentButton";
import { IncidentType, CreateIncidentInput, IncidentCriticality } from "../../../api";
import { toLoc } from "../../shared/converters";

export const MapCreateIncidentMutation = gql`
  ${createIncident}
`;

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
  criticalitySelection: {
    position: "absolute",
    bottom: "20px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  criticalityChip: {
    margin: "10px",
  },
  fabContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    zIndex: 999,
  },
});

export interface MapCreateIncidentViewerProps extends WithStyles<typeof style> {
  currentPosition: google.maps.LatLngLiteral;
  currentRange: number;
  loggedInUser: string;
  finishCreation: (input: CreateIncidentInput) => void;
  resetPosition: () => void;
}

const MapCreateIncidentViewerBase = ({
  currentPosition,
  classes,
  loggedInUser,
  finishCreation,
  resetPosition,
}: MapCreateIncidentViewerProps) => {
  const [incidentCriticality, setIncidentCriticality] = React.useState("SLIGHT");

  return (
    <React.Fragment>
      <div className={classes.infoText}>MOVA O MARCADOR PARA O LOCAL DO INCIDENTE</div>
      <WaterMarker
        animation={google.maps.Animation.DROP}
        position={currentPosition}
        isSelected={false}
        loggedInUser={loggedInUser}
      />
      <div className={classes.fabContainer}>
        <ResetPositionButton resetPosition={resetPosition} />
        <CreateIncidentButton
          creating
          finishCreation={() =>
            finishCreation({
              incidentType: IncidentType.FLOOD,
              incidentCriticality: incidentCriticality as IncidentCriticality,
              location: toLoc(currentPosition),
              reporter: loggedInUser,
            })
          }
        />
      </div>
      <div className={classes.criticalitySelection}>
        <Chip
          label="LEVE"
          clickable
          className={classes.criticalityChip}
          color={incidentCriticality === "SLIGHT" ? "secondary" : "primary"}
          onClick={() => setIncidentCriticality("SLIGHT")}
        />
        <Chip
          label="MODERADO"
          clickable
          className={classes.criticalityChip}
          color={incidentCriticality === "MODERATE" ? "secondary" : "primary"}
          onClick={() => setIncidentCriticality("MODERATE")}
        />
        <Chip
          label="GRAVE"
          clickable
          className={classes.criticalityChip}
          color={incidentCriticality === "SERIOUS" ? "secondary" : "primary"}
          onClick={() => setIncidentCriticality("SERIOUS")}
        />
      </div>
    </React.Fragment>
  );
};

const MapCreateIncidentViewer = withStyles(style)(MapCreateIncidentViewerBase);

export { MapCreateIncidentViewer };
