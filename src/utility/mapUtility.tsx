// todo merge with city

import mapboxgl from "mapbox-gl";
import { City } from "./city";

export interface Coords {
    latitude: number;
    longitude: number;
  }
  
function calculateBoundingBox(city: City): mapboxgl.LngLatBoundsLike {

  if (city.latitude == undefined || city.longitude == undefined)
  {
    throw Error(`There is an underfined coordinate in ${city.name}`)
  }

    const north = city.latitude + 0.3;
    const south = city.latitude - 0.3;
    const east = city.longitude + 0.3;
    const west = city.longitude - 0.3;

    return [[west, south], [east, north]];
}

export {  calculateBoundingBox }