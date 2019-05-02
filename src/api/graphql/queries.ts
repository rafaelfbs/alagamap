// tslint:disable
// this is an auto generated file. This will be overwritten

export const nearbyIncidents = `query NearbyIncidents(
  $location: LocationInput!
  $km: Int
  $createdAt: String!
) {
  nearbyIncidents(location: $location, km: $km, createdAt: $createdAt) {
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
          reporter
        }
        nextToken
      }
      reporter
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
          reporter
        }
        nextToken
      }
      reporter
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
        reporter
      }
      reporter
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
          reporter
        }
        nextToken
      }
      reporter
    }
    nextToken
  }
}
`;
export const searchIncidentStatuss = `query SearchIncidentStatuss(
  $filter: SearchableIncidentStatusFilterInput
  $sort: SearchableIncidentStatusSortInput
  $limit: Int
  $nextToken: Int
) {
  searchIncidentStatuss(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
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
        reporter
      }
      reporter
    }
    nextToken
  }
}
`;
