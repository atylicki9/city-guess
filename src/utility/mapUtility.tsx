// todo merge with city

import mapboxgl from "mapbox-gl";
import { City } from "./city";

export interface Coords {
    latitude: number;
    longitude: number;
  }
  
function setMapStyleByDifficulty(difficulty: string): string {
  console.log(difficulty)

  switch(difficulty) { 
    case "Easy": { 
      return "mapbox://styles/atylicki/cllst95u600rr01p71cw06b59";
    } 
    case "Medium": { 
      return "mapbox://styles/atylicki/cllst6hbb00t801qb00bo9vj3";
    } 
    case "Hard": {
      return "mapbox://styles/atylicki/clkq8f6ac01i401p21tpg1krd";
    }
    case "Impossible": {
      return "mapbox://styles/atylicki/cllswuswr00vz01qihq539nf8";
    }
    default: { 
      console.log("Using default map style.")
      return "mapbox://styles/atylicki/clkq8f6ac01i401p21tpg1krd";
    } 
  } 
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

export {  calculateBoundingBox, setMapStyleByDifficulty }