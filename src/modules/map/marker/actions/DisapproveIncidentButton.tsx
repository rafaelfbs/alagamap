import * as React from "react";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import { createIncidentStatus } from "../../../../api/graphql/mutations";
import { IncidentStatusType } from "../../../../api";
import Button from "@material-ui/core/Button";
import { Incident } from "../../../shared/types";

const createIncidentStatusMutation = gql`
  ${createIncidentStatus}
`;

const getDisapprovingStatusesQuery = gql`
  query GetIncidentWithDisapprovedStatuses($id: ID!) {
    getIncident(id: $id) {
      id
      incidentStatuses(filter: { statusType: { eq: DISAPPROVE } }) {
        items {
          id
        }
      }
    }
  }
`;

export interface DisapproveIncidentButtonProps {
  incident: Incident;
}

const DisapproveIncidentButton = ({ incident }: DisapproveIncidentButtonProps) => (
  <Mutation
    mutation={createIncidentStatusMutation}
    variables={{
      input: {
        statusType: IncidentStatusType.DISAPPROVE,
        incidentStatusIncidentId: incident.id,
      },
    }}
    refetchQueries={() => [{ query: getDisapprovingStatusesQuery, variables: { id: incident.id } }]}
    awaitRefetchQueries
  >
    {approve => (
      <Query query={getDisapprovingStatusesQuery} variables={{ id: incident.id }}>
        {({ data }) => (
          <Button onClick={() => approve()}>
            SOLUCIONADO (
            {data && data.getIncident && data.getIncident.incidentStatuses
              ? data.getIncident.incidentStatuses.items.length
              : 0}
            )
          </Button>
        )}
      </Query>
    )}
  </Mutation>
);

export { DisapproveIncidentButton };
