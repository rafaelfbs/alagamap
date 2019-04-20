export interface Location {
  lat: number;
  lon: number;
}

export interface Incident {
  id: string;
  location: Location;
}
