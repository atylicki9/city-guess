import './map.css';
import React, { useContext, useEffect } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import {calculateBoundingBox} from '../../utility/mapUtility'
import { City } from '../../utility/city';
import GameContext from '../../context/gameContext';


const MapboxMap: React.FC = () => {
  
  const { city } = useContext(GameContext);
    if (city.latitude == undefined || city.longitude == undefined)
    {
      throw Error(`There is an underfined coordinate in ${city.name}`)
    }
    
    useEffect(() => {
      console.log(`Current City to be Mapped: ${city.name}`)
      mapboxgl.accessToken = 'pk.eyJ1IjoiYXR5bGlja2kiLCJhIjoiY2xrcHplOWRmMW9jejNrcjF5Zm5xcHJyMyJ9.7IpsnYSPH9TqHColAwrXbg'; // make secure key
      const map: Map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/atylicki/clkq8f6ac01i401p21tpg1krd',
        zoom: 7,
        maxBounds: calculateBoundingBox(city)
      });
  
      return () => map.remove();
    }, [city]);
  
    return <div id="map" className='mapboxMap'/>;
  };

  export default MapboxMap;
