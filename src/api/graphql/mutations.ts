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
    incidentCriticality
    incidentStatuses {
      items {
        id
        statusType
        incident {
          id
          incidentType
          incidentCriticality
          reporter
        }
        reporter
      }
      nextToken
    }
    reporter
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
    incidentCriticality
    incidentStatuses {
      items {
        id
        statusType
        incident {
          id
          incidentType
          incidentCriticality
          reporter
        }
        reporter
      }
      nextToken
    }
    reporter
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
    incidentCriticality
    incidentStatuses {
      items {
        id
        statusType
        incident {
          id
          incidentType
          incidentCriticality
          reporter
        }
        reporter
      }
      nextToken
    }
    reporter
  }
}
`;
export const createIncidentStatus = `mutation CreateIncidentStatus($input: CreateIncidentStatusInput!) {
  createIncidentStatus(input: $input) {
    id
    statusType
    incident {
      id
      location {
        lat
        lon
      }
      incidentType
      incidentCriticality
      incidentStatuses {
        items {
          id
          statusType
          reporter
        }
        nextToken
      }
      reporter
    }
    reporter
  }
}
`;
export const updateIncidentStatus = `mutation UpdateIncidentStatus($input: UpdateIncidentStatusInput!) {
  updateIncidentStatus(input: $input) {
    id
    statusType
    incident {
      id
      location {
        lat
        lon
      }
      incidentType
      incidentCriticality
      incidentStatuses {
        items {
          id
          statusType
          reporter
        }
        nextToken
      }
      reporter
    }
    reporter
  }
}
`;
export const deleteIncidentStatus = `mutation DeleteIncidentStatus($input: DeleteIncidentStatusInput!) {
  deleteIncidentStatus(input: $input) {
    id
    statusType
    incident {
      id
      location {
        lat
        lon
      }
      incidentType
      incidentCriticality
      incidentStatuses {
        items {
          id
          statusType
          reporter
        }
        nextToken
      }
      reporter
    }
    reporter
  }
}
`;
