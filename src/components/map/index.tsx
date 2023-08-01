import './map.css';
import React, { useEffect } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import citiesJson from './cities.json'

interface Coords {
    latitude: number;
    longitude: number;
  }

interface City {
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

const MapboxMap: React.FC = () => {

    const city  = getRandomCity()
    if (city == null)
    {
        throw new Error("Unable to find City in cities.json")
    }

    const inputCoords: Coords = { latitude: city.latitude, longitude: city.longitude };
    const bounds = calculateBoundingBox(inputCoords);
    console.log(bounds);

    useEffect(() => {
      mapboxgl.accessToken = 'pk.eyJ1IjoiYXR5bGlja2kiLCJhIjoiY2xrcHplOWRmMW9jejNrcjF5Zm5xcHJyMyJ9.7IpsnYSPH9TqHColAwrXbg'; // make secure key
      const map: Map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/atylicki/clkq8f6ac01i401p21tpg1krd',
        zoom: 7,
        maxBounds: [[bounds.west, bounds.south], [bounds.east, bounds.north]]
      });
  
      return () => map.remove();
    }, []);
  
    return <div id="map" className='mapboxMap'/>;
  };

  export default MapboxMap;
