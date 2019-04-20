import * as React from "react";
import gql from "graphql-tag";
import { Map } from "./Map";
import { withGoogleMap, withScriptjs } from "react-google-maps";
import { useGeoLoc } from "../../hooks/geo-loc";
import { Query, Mutation } from "react-apollo";
import { toLoc } from "../shared/converters";
import { nearbyIncidents } from "../../api/graphql/queries";
import { createIncident } from "../../api/graphql/mutations";

const MapComponent = typeof window === "undefined" ? Map : withScriptjs(withGoogleMap(Map));
const MapQuery = gql`
  ${nearbyIncidents}
`;
const CreateIncidentMutation = gql`
  ${createIncident}
`;

const MapManager = () => {
  const geo = useGeoLoc();
  const [selectedMarker, setSelectedMarker] = React.useState(null);
  const [currentPosition, setCurrentPosition] = React.useState(geo.position);

  if (!geo.loaded || geo.error) {
    return <div>Loading...</div>;
  } else if (currentPosition === null && geo.position) {
    setCurrentPosition(geo.position);
  }

  return (
    <Mutation
      mutation={CreateIncidentMutation}
      refetchQueries={() => [{ query: MapQuery, variables: { location: toLoc(geo.position) } }]}
      awaitRefetchQueries
    >
      {createIncident => (
        <Query query={MapQuery} variables={{ location: toLoc(geo.position) }} pollInterval={10000}>
          {({ data }) => (
            <MapComponent
              devicePosition={geo.position}
              currentPosition={currentPosition}
              setCurrentPosition={setCurrentPosition}
              nearbyIncidents={(data && data.nearbyIncidents && data.nearbyIncidents.items) || []}
              createIncident={createIncident}
              selectedMarker={selectedMarker}
              setSelectedMarker={setSelectedMarker}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCl2LdcNSsN2M8wycnuufBlTgi0nolsMNE&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ flex: 1 }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          )}
        </Query>
      )}
    </Mutation>
  );
};

export { MapManager };
