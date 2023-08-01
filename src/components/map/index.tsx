import './map.css';
import React, { useEffect } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';

interface Coords {
    latitude: number;
    longitude: number;
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

    const inputCoords: Coords = { latitude: 40.7128, longitude: -74.0060 };
    const bounds = calculateBoundingBox(inputCoords);
    console.log(bounds);

    useEffect(() => {
      mapboxgl.accessToken = 'pk.eyJ1IjoiYXR5bGlja2kiLCJhIjoiY2xrcHplOWRmMW9jejNrcjF5Zm5xcHJyMyJ9.7IpsnYSPH9TqHColAwrXbg'; // make secure key
      const map: Map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/atylicki/clkq8f6ac01i401p21tpg1krd',
        //center: [-74.0060, 40.7128],
        zoom: 7,
        maxBounds: [[bounds.west, bounds.south], [bounds.east, bounds.north]]
      });
  
      return () => map.remove(); // Clean up the map instance when the component is unmounted
    }, []);
  
    return <div id="map" className='mapboxMap'/>;
  };

  export default MapboxMap;