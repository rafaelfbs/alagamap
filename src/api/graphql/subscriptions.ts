// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateIncident = `subscription OnCreateIncident {
  onCreateIncident {
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
export const onUpdateIncident = `subscription OnUpdateIncident {
  onUpdateIncident {
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
export const onDeleteIncident = `subscription OnDeleteIncident {
  onDeleteIncident {
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
export const onCreateIncidentStatus = `subscription OnCreateIncidentStatus {
  onCreateIncidentStatus {
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
export const onUpdateIncidentStatus = `subscription OnUpdateIncidentStatus {
  onUpdateIncidentStatus {
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
export const onDeleteIncidentStatus = `subscription OnDeleteIncidentStatus {
  onDeleteIncidentStatus {
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
