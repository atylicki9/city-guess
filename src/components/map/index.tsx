import './map.css';
import React, { useEffect } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import {getRandomCity, calculateBoundingBox, Coords} from '../../utility/mapUtility'


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
