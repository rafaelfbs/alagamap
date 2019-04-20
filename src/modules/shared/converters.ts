import { Location } from "./types";

export const toLoc = (pos: google.maps.LatLngLiteral): Location => ({ lat: pos.lat, lon: pos.lng });
export const toPos = (loc: Location): google.maps.LatLngLiteral => ({ lat: loc.lat, lng: loc.lon });
