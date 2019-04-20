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
    }
    nextToken
  }
}
`;
