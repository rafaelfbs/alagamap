/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateIncidentInput = {
  id?: string | null,
  location: LocationInput,
  incidentType: IncidentType,
  incidentCriticality: IncidentCriticality,
  reporter?: string | null,
};

export type LocationInput = {
  lat: number,
  lon: number,
};

export enum IncidentType {
  FLOOD = "FLOOD",
}


export enum IncidentCriticality {
  SLIGHT = "SLIGHT",
  MODERATE = "MODERATE",
  SERIOUS = "SERIOUS",
}


export enum IncidentStatusType {
  APPROVE = "APPROVE",
  DISAPPROVE = "DISAPPROVE",
}


export type UpdateIncidentInput = {
  id: string,
  location?: LocationInput | null,
  incidentType?: IncidentType | null,
  incidentCriticality?: IncidentCriticality | null,
  reporter?: string | null,
};

export type DeleteIncidentInput = {
  id?: string | null,
};

export type CreateIncidentStatusInput = {
  id?: string | null,
  statusType: IncidentStatusType,
  reporter?: string | null,
  incidentStatusIncidentId: string,
};

export type UpdateIncidentStatusInput = {
  id: string,
  statusType?: IncidentStatusType | null,
  reporter?: string | null,
  incidentStatusIncidentId?: string | null,
};

export type DeleteIncidentStatusInput = {
  id?: string | null,
};

export type ModelIncidentFilterInput = {
  id?: ModelIDFilterInput | null,
  incidentType?: ModelIncidentTypeFilterInput | null,
  incidentCriticality?: ModelIncidentCriticalityFilterInput | null,
  reporter?: ModelStringFilterInput | null,
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

export type ModelIncidentCriticalityFilterInput = {
  eq?: IncidentCriticality | null,
  ne?: IncidentCriticality | null,
};

export type ModelStringFilterInput = {
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

export type ModelIncidentStatusFilterInput = {
  id?: ModelIDFilterInput | null,
  statusType?: ModelIncidentStatusTypeFilterInput | null,
  reporter?: ModelStringFilterInput | null,
  and?: Array< ModelIncidentStatusFilterInput | null > | null,
  or?: Array< ModelIncidentStatusFilterInput | null > | null,
  not?: ModelIncidentStatusFilterInput | null,
};

export type ModelIncidentStatusTypeFilterInput = {
  eq?: IncidentStatusType | null,
  ne?: IncidentStatusType | null,
};

export type SearchableIncidentFilterInput = {
  id?: SearchableIDFilterInput | null,
  reporter?: SearchableStringFilterInput | null,
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

export type SearchableStringFilterInput = {
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
  reporter = "reporter",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableIncidentStatusFilterInput = {
  id?: SearchableIDFilterInput | null,
  reporter?: SearchableStringFilterInput | null,
  and?: Array< SearchableIncidentStatusFilterInput | null > | null,
  or?: Array< SearchableIncidentStatusFilterInput | null > | null,
  not?: SearchableIncidentStatusFilterInput | null,
};

export type SearchableIncidentStatusSortInput = {
  field?: SearchableIncidentStatusSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableIncidentStatusSortableFields {
  id = "id",
  reporter = "reporter",
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
    incidentCriticality: IncidentCriticality,
    incidentStatuses:  {
      __typename: "ModelIncidentStatusConnection",
      items:  Array< {
        __typename: "IncidentStatus",
        id: string,
        statusType: IncidentStatusType,
        incident:  {
          __typename: "Incident",
          id: string,
          incidentType: IncidentType,
          incidentCriticality: IncidentCriticality,
          reporter: string | null,
        },
        reporter: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    reporter: string | null,
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
    incidentCriticality: IncidentCriticality,
    incidentStatuses:  {
      __typename: "ModelIncidentStatusConnection",
      items:  Array< {
        __typename: "IncidentStatus",
        id: string,
        statusType: IncidentStatusType,
        incident:  {
          __typename: "Incident",
          id: string,
          incidentType: IncidentType,
          incidentCriticality: IncidentCriticality,
          reporter: string | null,
        },
        reporter: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    reporter: string | null,
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
    incidentCriticality: IncidentCriticality,
    incidentStatuses:  {
      __typename: "ModelIncidentStatusConnection",
      items:  Array< {
        __typename: "IncidentStatus",
        id: string,
        statusType: IncidentStatusType,
        incident:  {
          __typename: "Incident",
          id: string,
          incidentType: IncidentType,
          incidentCriticality: IncidentCriticality,
          reporter: string | null,
        },
        reporter: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    reporter: string | null,
  } | null,
};

export type CreateIncidentStatusMutationVariables = {
  input: CreateIncidentStatusInput,
};

export type CreateIncidentStatusMutation = {
  createIncidentStatus:  {
    __typename: "IncidentStatus",
    id: string,
    statusType: IncidentStatusType,
    incident:  {
      __typename: "Incident",
      id: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      incidentType: IncidentType,
      incidentCriticality: IncidentCriticality,
      incidentStatuses:  {
        __typename: "ModelIncidentStatusConnection",
        items:  Array< {
          __typename: "IncidentStatus",
          id: string,
          statusType: IncidentStatusType,
          reporter: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      reporter: string | null,
    },
    reporter: string | null,
  } | null,
};

export type UpdateIncidentStatusMutationVariables = {
  input: UpdateIncidentStatusInput,
};

export type UpdateIncidentStatusMutation = {
  updateIncidentStatus:  {
    __typename: "IncidentStatus",
    id: string,
    statusType: IncidentStatusType,
    incident:  {
      __typename: "Incident",
      id: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      incidentType: IncidentType,
      incidentCriticality: IncidentCriticality,
      incidentStatuses:  {
        __typename: "ModelIncidentStatusConnection",
        items:  Array< {
          __typename: "IncidentStatus",
          id: string,
          statusType: IncidentStatusType,
          reporter: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      reporter: string | null,
    },
    reporter: string | null,
  } | null,
};

export type DeleteIncidentStatusMutationVariables = {
  input: DeleteIncidentStatusInput,
};

export type DeleteIncidentStatusMutation = {
  deleteIncidentStatus:  {
    __typename: "IncidentStatus",
    id: string,
    statusType: IncidentStatusType,
    incident:  {
      __typename: "Incident",
      id: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      incidentType: IncidentType,
      incidentCriticality: IncidentCriticality,
      incidentStatuses:  {
        __typename: "ModelIncidentStatusConnection",
        items:  Array< {
          __typename: "IncidentStatus",
          id: string,
          statusType: IncidentStatusType,
          reporter: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      reporter: string | null,
    },
    reporter: string | null,
  } | null,
};

export type NearbyIncidentsQueryVariables = {
  location: LocationInput,
  km?: number | null,
  createdAt: string,
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
      incidentCriticality: IncidentCriticality,
      incidentStatuses:  {
        __typename: "ModelIncidentStatusConnection",
        items:  Array< {
          __typename: "IncidentStatus",
          id: string,
          statusType: IncidentStatusType,
          reporter: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      reporter: string | null,
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
    incidentCriticality: IncidentCriticality,
    incidentStatuses:  {
      __typename: "ModelIncidentStatusConnection",
      items:  Array< {
        __typename: "IncidentStatus",
        id: string,
        statusType: IncidentStatusType,
        incident:  {
          __typename: "Incident",
          id: string,
          incidentType: IncidentType,
          incidentCriticality: IncidentCriticality,
          reporter: string | null,
        },
        reporter: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    reporter: string | null,
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
      incidentCriticality: IncidentCriticality,
      incidentStatuses:  {
        __typename: "ModelIncidentStatusConnection",
        items:  Array< {
          __typename: "IncidentStatus",
          id: string,
          statusType: IncidentStatusType,
          reporter: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      reporter: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetIncidentStatusQueryVariables = {
  id: string,
};

export type GetIncidentStatusQuery = {
  getIncidentStatus:  {
    __typename: "IncidentStatus",
    id: string,
    statusType: IncidentStatusType,
    incident:  {
      __typename: "Incident",
      id: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      incidentType: IncidentType,
      incidentCriticality: IncidentCriticality,
      incidentStatuses:  {
        __typename: "ModelIncidentStatusConnection",
        items:  Array< {
          __typename: "IncidentStatus",
          id: string,
          statusType: IncidentStatusType,
          reporter: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      reporter: string | null,
    },
    reporter: string | null,
  } | null,
};

export type ListIncidentStatussQueryVariables = {
  filter?: ModelIncidentStatusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIncidentStatussQuery = {
  listIncidentStatuss:  {
    __typename: "ModelIncidentStatusConnection",
    items:  Array< {
      __typename: "IncidentStatus",
      id: string,
      statusType: IncidentStatusType,
      incident:  {
        __typename: "Incident",
        id: string,
        location:  {
          __typename: "Location",
          lat: number,
          lon: number,
        },
        incidentType: IncidentType,
        incidentCriticality: IncidentCriticality,
        incidentStatuses:  {
          __typename: "ModelIncidentStatusConnection",
          nextToken: string | null,
        } | null,
        reporter: string | null,
      },
      reporter: string | null,
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
      incidentCriticality: IncidentCriticality,
      incidentStatuses:  {
        __typename: "ModelIncidentStatusConnection",
        items:  Array< {
          __typename: "IncidentStatus",
          id: string,
          statusType: IncidentStatusType,
          reporter: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      reporter: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchIncidentStatussQueryVariables = {
  filter?: SearchableIncidentStatusFilterInput | null,
  sort?: SearchableIncidentStatusSortInput | null,
  limit?: number | null,
  nextToken?: number | null,
};

export type SearchIncidentStatussQuery = {
  searchIncidentStatuss:  {
    __typename: "SearchableIncidentStatusConnection",
    items:  Array< {
      __typename: "IncidentStatus",
      id: string,
      statusType: IncidentStatusType,
      incident:  {
        __typename: "Incident",
        id: string,
        location:  {
          __typename: "Location",
          lat: number,
          lon: number,
        },
        incidentType: IncidentType,
        incidentCriticality: IncidentCriticality,
        incidentStatuses:  {
          __typename: "ModelIncidentStatusConnection",
          nextToken: string | null,
        } | null,
        reporter: string | null,
      },
      reporter: string | null,
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
    incidentCriticality: IncidentCriticality,
    incidentStatuses:  {
      __typename: "ModelIncidentStatusConnection",
      items:  Array< {
        __typename: "IncidentStatus",
        id: string,
        statusType: IncidentStatusType,
        incident:  {
          __typename: "Incident",
          id: string,
          incidentType: IncidentType,
          incidentCriticality: IncidentCriticality,
          reporter: string | null,
        },
        reporter: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    reporter: string | null,
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
    incidentCriticality: IncidentCriticality,
    incidentStatuses:  {
      __typename: "ModelIncidentStatusConnection",
      items:  Array< {
        __typename: "IncidentStatus",
        id: string,
        statusType: IncidentStatusType,
        incident:  {
          __typename: "Incident",
          id: string,
          incidentType: IncidentType,
          incidentCriticality: IncidentCriticality,
          reporter: string | null,
        },
        reporter: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    reporter: string | null,
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
    incidentCriticality: IncidentCriticality,
    incidentStatuses:  {
      __typename: "ModelIncidentStatusConnection",
      items:  Array< {
        __typename: "IncidentStatus",
        id: string,
        statusType: IncidentStatusType,
        incident:  {
          __typename: "Incident",
          id: string,
          incidentType: IncidentType,
          incidentCriticality: IncidentCriticality,
          reporter: string | null,
        },
        reporter: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    reporter: string | null,
  } | null,
};

export type OnCreateIncidentStatusSubscription = {
  onCreateIncidentStatus:  {
    __typename: "IncidentStatus",
    id: string,
    statusType: IncidentStatusType,
    incident:  {
      __typename: "Incident",
      id: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      incidentType: IncidentType,
      incidentCriticality: IncidentCriticality,
      incidentStatuses:  {
        __typename: "ModelIncidentStatusConnection",
        items:  Array< {
          __typename: "IncidentStatus",
          id: string,
          statusType: IncidentStatusType,
          reporter: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      reporter: string | null,
    },
    reporter: string | null,
  } | null,
};

export type OnUpdateIncidentStatusSubscription = {
  onUpdateIncidentStatus:  {
    __typename: "IncidentStatus",
    id: string,
    statusType: IncidentStatusType,
    incident:  {
      __typename: "Incident",
      id: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      incidentType: IncidentType,
      incidentCriticality: IncidentCriticality,
      incidentStatuses:  {
        __typename: "ModelIncidentStatusConnection",
        items:  Array< {
          __typename: "IncidentStatus",
          id: string,
          statusType: IncidentStatusType,
          reporter: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      reporter: string | null,
    },
    reporter: string | null,
  } | null,
};

export type OnDeleteIncidentStatusSubscription = {
  onDeleteIncidentStatus:  {
    __typename: "IncidentStatus",
    id: string,
    statusType: IncidentStatusType,
    incident:  {
      __typename: "Incident",
      id: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      incidentType: IncidentType,
      incidentCriticality: IncidentCriticality,
      incidentStatuses:  {
        __typename: "ModelIncidentStatusConnection",
        items:  Array< {
          __typename: "IncidentStatus",
          id: string,
          statusType: IncidentStatusType,
          reporter: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      reporter: string | null,
    },
    reporter: string | null,
  } | null,
};
