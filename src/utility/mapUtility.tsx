import citiesJson from '../data/cities.json'

export interface Coords {
    latitude: number;
    longitude: number;
  }

export interface City {
    name: string;
    latitude: number;
    longitude: number;
  }

function getRandomCity(): City | null {
    const randomIndex = Math.floor(Math.random() * citiesJson.length);
    return citiesJson[randomIndex];
}
  
function calculateBoundingBox(coords: Coords): { north: number; south: number; east: number; west: number } {
    const { latitude, longitude } = coords;

    const north = latitude + 0.3;
    const south = latitude - 0.3;
    const east = longitude + 0.3;
    const west = longitude - 0.3;

    return { north, south, east, west };
}

export { getRandomCity, calculateBoundingBox }