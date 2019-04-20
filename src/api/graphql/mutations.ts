// tslint:disable
// this is an auto generated file. This will be overwritten

export const createIncident = `mutation CreateIncident($input: CreateIncidentInput!) {
  createIncident(input: $input) {
    id
    location {
      lat
      lon
    }
    incidentType
  }
}
`;
export const updateIncident = `mutation UpdateIncident($input: UpdateIncidentInput!) {
  updateIncident(input: $input) {
    id
    location {
      lat
      lon
    }
    incidentType
  }
}
`;
export const deleteIncident = `mutation DeleteIncident($input: DeleteIncidentInput!) {
  deleteIncident(input: $input) {
    id
    location {
      lat
      lon
    }
    incidentType
  }
}
`;
