import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import * as React from "react";
import { CreateIncidentButton } from "../actions/CreateIncidentButton";
import { ResetPositionButton } from "../actions/ResetPositionButton";
import { Mutation } from "react-apollo";
import { MapListIncidentMarkersViewerQuery } from "./MapListIncidentMarkersViewer";
import { IncidentType } from "../../../api";
import { toLoc } from "../../shared/converters";
import gql from "graphql-tag";
import { createIncident } from "../../../api/graphql/mutations";

const styles = createStyles({
  fabContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
  },
});

export const MapActionsViewerMutation = gql`
  ${createIncident}
`;

export interface MapActionsViewerProps extends WithStyles<typeof styles> {
  currentPosition: google.maps.LatLngLiteral;
  currentRange: number;
  loggedInUser: string;
  creating: boolean;
  startCreation: () => void;
  finishCreation: () => void;
  resetPosition: () => void;
}

const MapActionsViewerBase = ({
  classes,
  creating,
  startCreation,
  finishCreation,
  resetPosition,
}: MapActionsViewerProps) => (
  <div className={classes.fabContainer}>
    <ResetPositionButton resetPosition={resetPosition} />
    <CreateIncidentButton
      creating={creating}
      startCreation={startCreation}
      finishCreation={finishCreation}
    />
  </div>
);

const withCreateIncident = (Component: React.ElementType<MapActionsViewerProps>) => {
  function WithCreateIncident(props: MapActionsViewerProps) {
    return (
      <Mutation
        mutation={MapActionsViewerMutation}
        refetchQueries={() => [
          {
            query: MapListIncidentMarkersViewerQuery,
          },
        ]}
      >
        {createIncident => (
          <Component
            {...props}
            finishCreation={async () => {
              await createIncident({
                variables: {
                  input: {
                    incidentType: IncidentType.FLOOD,
                    location: toLoc(props.currentPosition),
                    reporter: props.loggedInUser,
                  },
                },
              });

              props.finishCreation();
            }}
          />
        )}
      </Mutation>
    );
  }

  return WithCreateIncident;
};

const MapActionsViewer = withStyles(styles)(withCreateIncident(MapActionsViewerBase));

export { MapActionsViewer };
