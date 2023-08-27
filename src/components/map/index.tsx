import './map.css';
import React, { useContext, useEffect } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import {calculateBoundingBox} from '../../utility/mapUtility'
import GameContext from '../../context/gameContext';
import { mapboxApiToken } from './mapboxConfig';

const MapboxMap: React.FC = () => {
  
  const { city, updateCity } = useContext(GameContext);
    if (city.latitude == undefined || city.longitude == undefined)
    {
      throw Error(`There is an underfined coordinate in ${city.name}`)
    }
    
    useEffect(() => {
      console.log(`Current City to be Mapped: ${city.name}`)
      mapboxgl.accessToken = mapboxApiToken; 
      const map: Map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/atylicki/clkq8f6ac01i401p21tpg1krd',
        zoom: 7,
        maxBounds: calculateBoundingBox(city)
      });
  
      return () => map.remove();
    }, [city.name]);
  
    return <div id="map" className='mapboxMap'/>;
  };

  export default MapboxMap;
