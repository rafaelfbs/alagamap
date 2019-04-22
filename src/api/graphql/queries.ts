// tslint:disable
// this is an auto generated file. This will be overwritten

export const nearbyIncidents = `query NearbyIncidents($location: LocationInput!, $km: Int) {
  nearbyIncidents(location: $location, km: $km) {
    items {
      id
      location {
        lat
        lon
      }
      incidentType
      incidentStatuses {
        items {
          id
          statusType
        }
        nextToken
      }
    }
    total
    nextToken
  }
}
`;
export const getIncident = `query GetIncident($id: ID!) {
  getIncident(id: $id) {
    id
    location {
      lat
      lon
    }
    incidentType
    incidentStatuses {
      items {
        id
        statusType
        incident {
          id
          incidentType
        }
      }
      nextToken
    }
  }
}
`;
export const listIncidents = `query ListIncidents(
  $filter: ModelIncidentFilterInput
  $limit: Int
  $nextToken: String
) {
  listIncidents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      location {
        lat
        lon
      }
      incidentType
      incidentStatuses {
        items {
          id
          statusType
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getIncidentStatus = `query GetIncidentStatus($id: ID!) {
  getIncidentStatus(id: $id) {
    id
    statusType
    incident {
      id
      location {
        lat
        lon
      }
      incidentType
      incidentStatuses {
        items {
          id
          statusType
        }
        nextToken
      }
    }
  }
}
`;
export const listIncidentStatuss = `query ListIncidentStatuss(
  $filter: ModelIncidentStatusFilterInput
  $limit: Int
  $nextToken: String
) {
  listIncidentStatuss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      statusType
      incident {
        id
        location {
          lat
          lon
        }
        incidentType
        incidentStatuses {
          nextToken
        }
      }
    }
    nextToken
  }
}
`;
export const searchIncidents = `query SearchIncidents(
  $filter: SearchableIncidentFilterInput
  $sort: SearchableIncidentSortInput
  $limit: Int
  $nextToken: Int
) {
  searchIncidents(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      location {
        lat
        lon
      }
      incidentType
      incidentStatuses {
        items {
          id
          statusType
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
