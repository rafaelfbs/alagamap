// tslint:disable
// this is an auto generated file. This will be overwritten

export const getMarker = `query GetMarker($id: ID!) {
  getMarker(id: $id) {
    id
    geoPosition {
      latitude
      longitude
    }
  }
}
`;
export const listMarkers = `query ListMarkers(
  $filter: ModelMarkerFilterInput
  $limit: Int
  $nextToken: String
) {
  listMarkers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      geoPosition {
        latitude
        longitude
      }
    }
    nextToken
  }
}
`;
