/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateIncidentInput = {
  id?: string | null,
  location: LocationInput,
  incidentType: IncidentType,
};

export type LocationInput = {
  lat: number,
  lon: number,
};

export enum IncidentType {
  FLOOD = "FLOOD",
}


export type UpdateIncidentInput = {
  id: string,
  location?: LocationInput | null,
  incidentType?: IncidentType | null,
};

export type DeleteIncidentInput = {
  id?: string | null,
};

export type ModelIncidentFilterInput = {
  id?: ModelIDFilterInput | null,
  incidentType?: ModelIncidentTypeFilterInput | null,
  and?: Array< ModelIncidentFilterInput | null > | null,
  or?: Array< ModelIncidentFilterInput | null > | null,
  not?: ModelIncidentFilterInput | null,
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

export type ModelIncidentTypeFilterInput = {
  eq?: IncidentType | null,
  ne?: IncidentType | null,
};

export type SearchableIncidentFilterInput = {
  id?: SearchableIDFilterInput | null,
  and?: Array< SearchableIncidentFilterInput | null > | null,
  or?: Array< SearchableIncidentFilterInput | null > | null,
  not?: SearchableIncidentFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableIncidentSortInput = {
  field?: SearchableIncidentSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableIncidentSortableFields {
  id = "id",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type CreateIncidentMutationVariables = {
  input: CreateIncidentInput,
};

export type CreateIncidentMutation = {
  createIncident:  {
    __typename: "Incident",
    id: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    incidentType: IncidentType,
  } | null,
};

export type UpdateIncidentMutationVariables = {
  input: UpdateIncidentInput,
};

export type UpdateIncidentMutation = {
  updateIncident:  {
    __typename: "Incident",
    id: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    incidentType: IncidentType,
  } | null,
};

export type DeleteIncidentMutationVariables = {
  input: DeleteIncidentInput,
};

export type DeleteIncidentMutation = {
  deleteIncident:  {
    __typename: "Incident",
    id: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    incidentType: IncidentType,
  } | null,
};

export type NearbyIncidentsQueryVariables = {
  location: LocationInput,
  km?: number | null,
};

export type NearbyIncidentsQuery = {
  nearbyIncidents:  {
    __typename: "IncidentConnection",
    items:  Array< {
      __typename: "Incident",
      id: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      incidentType: IncidentType,
    } | null > | null,
    total: number | null,
    nextToken: string | null,
  } | null,
};

export type GetIncidentQueryVariables = {
  id: string,
};

export type GetIncidentQuery = {
  getIncident:  {
    __typename: "Incident",
    id: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    incidentType: IncidentType,
  } | null,
};

export type ListIncidentsQueryVariables = {
  filter?: ModelIncidentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIncidentsQuery = {
  listIncidents:  {
    __typename: "ModelIncidentConnection",
    items:  Array< {
      __typename: "Incident",
      id: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      incidentType: IncidentType,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchIncidentsQueryVariables = {
  filter?: SearchableIncidentFilterInput | null,
  sort?: SearchableIncidentSortInput | null,
  limit?: number | null,
  nextToken?: number | null,
};

export type SearchIncidentsQuery = {
  searchIncidents:  {
    __typename: "SearchableIncidentConnection",
    items:  Array< {
      __typename: "Incident",
      id: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      incidentType: IncidentType,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateIncidentSubscription = {
  onCreateIncident:  {
    __typename: "Incident",
    id: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    incidentType: IncidentType,
  } | null,
};

export type OnUpdateIncidentSubscription = {
  onUpdateIncident:  {
    __typename: "Incident",
    id: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    incidentType: IncidentType,
  } | null,
};

export type OnDeleteIncidentSubscription = {
  onDeleteIncident:  {
    __typename: "Incident",
    id: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    incidentType: IncidentType,
  } | null,
};
