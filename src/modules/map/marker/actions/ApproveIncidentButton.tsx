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

const getApprovingStatusesQuery = gql`
  query GetIncidentWithApprovedStatuses($id: ID!) {
    getIncident(id: $id) {
      id
      incidentStatuses(filter: { statusType: { eq: APPROVE } }) {
        items {
          id
        }
      }
    }
  }
`;

export interface ApproveIncidentButtonProps {
  incident: Incident;
}

const ApproveIncidentButton = ({ incident }: ApproveIncidentButtonProps) => (
  <Mutation
    mutation={createIncidentStatusMutation}
    variables={{
      input: {
        statusType: IncidentStatusType.APPROVE,
        incidentStatusIncidentId: incident.id,
      },
    }}
    refetchQueries={() => [{ query: getApprovingStatusesQuery, variables: { id: incident.id } }]}
    awaitRefetchQueries
  >
    {approve => (
      <Query query={getApprovingStatusesQuery} variables={{ id: incident.id }}>
        {({ data }) => (
          <Button onClick={() => approve()}>
            CONFIRMADO (
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

export { ApproveIncidentButton };
