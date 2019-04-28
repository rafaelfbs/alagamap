import * as React from "react";
import gql from "graphql-tag";
import { Map } from "./Map";
import { withGoogleMap, withScriptjs } from "react-google-maps";
import { useGeoLoc } from "../../hooks/geo-loc";
import { Query, Mutation } from "react-apollo";
import { toLoc } from "../shared/converters";
import { nearbyIncidents } from "../../api/graphql/queries";
import { createIncident } from "../../api/graphql/mutations";

declare var OneSignal;

const GOOGLE_MAPS_URL =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyCl2LdcNSsN2M8wycnuufBlTgi0nolsMNE&v=3.exp&libraries=geometry,drawing,places";

const MapComponent = typeof window === "undefined" ? Map : withScriptjs(withGoogleMap(Map));
const MapQuery = gql`
  ${nearbyIncidents}
`;
const CreateIncidentMutation = gql`
  ${createIncident}
`;

const MapManager = ({ loggedInUser }: { loggedInUser: string }) => {
  const geo = useGeoLoc();
  const [currentPosition, setCurrentPosition] = React.useState(geo.position);
  const [searchDistance, setSearchDistance] = React.useState(5);

  React.useEffect(() => {
    if (geo.position) {
      if (currentPosition === null) {
        setCurrentPosition(geo.position);
      }

      OneSignal.push(function() {
        OneSignal.sendTags({
          user: loggedInUser,
          latitude: geo.position.lat,
          longitude: geo.position.lng,
        });
      });
    }
  }, [geo.position]);

  if (!geo.loaded || geo.error) {
    return <div>Loading...</div>;
  }

  const variables = {
    location: currentPosition && toLoc(currentPosition),
    km: searchDistance,
    limit: 1000,
  };

  return (
    <Mutation
      mutation={CreateIncidentMutation}
      refetchQueries={() => [{ query: MapQuery, variables }]}
      awaitRefetchQueries
    >
      {createIncident => (
        <Query query={MapQuery} variables={variables} pollInterval={10000}>
          {({ data }) => (
            <MapComponent
              devicePosition={geo.position}
              currentPosition={currentPosition}
              setCurrentPosition={setCurrentPosition}
              setCurrentBounds={bounds =>
                setSearchDistance(
                  google.maps.geometry.spherical.computeDistanceBetween(
                    bounds.getNorthEast(),
                    bounds.getCenter(),
                  ) / 1000,
                )
              }
              nearbyIncidents={(data && data.nearbyIncidents && data.nearbyIncidents.items) || []}
              createIncident={createIncident}
              googleMapURL={GOOGLE_MAPS_URL}
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
