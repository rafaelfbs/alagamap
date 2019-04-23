import * as React from "react";
import { ApproveIncidentButton } from "../actions/ApproveIncidentButton";
import { Incident } from "../../../shared/types";
import { DisapproveIncidentButton } from "../actions/DisapproveIncidentButton";

export interface WaterInfoWindowProps {
  incident: Incident;
}

const WaterInfoWindow = ({ incident }: WaterInfoWindowProps) => (
  <div>
    <h3>Ponto de Alagamento</h3>
    <div>
      <ApproveIncidentButton incident={incident} />
      <DisapproveIncidentButton incident={incident} />
    </div>
  </div>
);

export { WaterInfoWindow };
