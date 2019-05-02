import * as React from "react";
import { ApproveIncidentButton } from "../actions/ApproveIncidentButton";
import { Incident } from "../../../shared/types";
import { DisapproveIncidentButton } from "../actions/DisapproveIncidentButton";
import { IncidentStatusType } from "../../../../api";

export interface WaterInfoWindowProps {
  incident: Incident;
  loggedInUser: string;
}

const userIsIncidentReporter = (incident, reporter) => incident.reporter === reporter;
const userAlreadySetStatus = (incident, reporter, statusType) =>
  incident.incidentStatuses.items.some(
    status => status.statusType === statusType && status.reporter === reporter,
  );
const userIsIncidentReporterOrAlreadySetStatus = (incident, reporter, statusType) =>
  userIsIncidentReporter(incident, reporter) ||
  userAlreadySetStatus(incident, reporter, statusType);

const WaterInfoWindow = ({ incident, loggedInUser }: WaterInfoWindowProps) => (
  <div>
    <h3>Ponto de Alagamento</h3>
    <div>
      <ApproveIncidentButton
        incident={incident}
        readOnly={userIsIncidentReporterOrAlreadySetStatus(
          incident,
          loggedInUser,
          IncidentStatusType.APPROVE,
        )}
        loggedInUser={loggedInUser}
      />
      <DisapproveIncidentButton
        incident={incident}
        readOnly={userAlreadySetStatus(incident, loggedInUser, IncidentStatusType.DISAPPROVE)}
        loggedInUser={loggedInUser}
      />
    </div>
  </div>
);

export { WaterInfoWindow };
