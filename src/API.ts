/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateMarkerInput = {
  id?: string | null,
  geoPosition: GeoPositionInput,
};

export type GeoPositionInput = {
  latitude: number,
  longitude: number,
};

export type UpdateMarkerInput = {
  id: string,
  geoPosition?: GeoPositionInput | null,
};

export type DeleteMarkerInput = {
  id?: string | null,
};

export type ModelMarkerFilterInput = {
  id?: ModelIDFilterInput | null,
  and?: Array< ModelMarkerFilterInput | null > | null,
  or?: Array< ModelMarkerFilterInput | null > | null,
  not?: ModelMarkerFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateMarkerMutationVariables = {
  input: CreateMarkerInput,
};

export type CreateMarkerMutation = {
  createMarker:  {
    __typename: "Marker",
    id: string,
    geoPosition:  {
      __typename: "GeoPosition",
      latitude: number,
      longitude: number,
    },
  } | null,
};

export type UpdateMarkerMutationVariables = {
  input: UpdateMarkerInput,
};

export type UpdateMarkerMutation = {
  updateMarker:  {
    __typename: "Marker",
    id: string,
    geoPosition:  {
      __typename: "GeoPosition",
      latitude: number,
      longitude: number,
    },
  } | null,
};

export type DeleteMarkerMutationVariables = {
  input: DeleteMarkerInput,
};

export type DeleteMarkerMutation = {
  deleteMarker:  {
    __typename: "Marker",
    id: string,
    geoPosition:  {
      __typename: "GeoPosition",
      latitude: number,
      longitude: number,
    },
  } | null,
};

export type GetMarkerQueryVariables = {
  id: string,
};

export type GetMarkerQuery = {
  getMarker:  {
    __typename: "Marker",
    id: string,
    geoPosition:  {
      __typename: "GeoPosition",
      latitude: number,
      longitude: number,
    },
  } | null,
};

export type ListMarkersQueryVariables = {
  filter?: ModelMarkerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMarkersQuery = {
  listMarkers:  {
    __typename: "ModelMarkerConnection",
    items:  Array< {
      __typename: "Marker",
      id: string,
      geoPosition:  {
        __typename: "GeoPosition",
        latitude: number,
        longitude: number,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateMarkerSubscription = {
  onCreateMarker:  {
    __typename: "Marker",
    id: string,
    geoPosition:  {
      __typename: "GeoPosition",
      latitude: number,
      longitude: number,
    },
  } | null,
};

export type OnUpdateMarkerSubscription = {
  onUpdateMarker:  {
    __typename: "Marker",
    id: string,
    geoPosition:  {
      __typename: "GeoPosition",
      latitude: number,
      longitude: number,
    },
  } | null,
};

export type OnDeleteMarkerSubscription = {
  onDeleteMarker:  {
    __typename: "Marker",
    id: string,
    geoPosition:  {
      __typename: "GeoPosition",
      latitude: number,
      longitude: number,
    },
  } | null,
};
