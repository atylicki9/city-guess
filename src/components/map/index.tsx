import './map.css';
import React, { useContext, useEffect } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import {calculateBoundingBox, setMapStyleByDifficulty} from '../../utility/mapUtility'
import GameContext from '../../context/gameContext';
import { mapboxApiToken } from './mapboxConfig';

const MapboxMap: React.FC = () => {
  
  const { city, difficulty, updateDifficulty } = useContext(GameContext);
    if (city.latitude == undefined || city.longitude == undefined)
    {
      throw Error(`There is an undefined coordinate in ${city.name}`)
    }
    
    useEffect(() => {
      console.log(`Current City to be Mapped: ${city.name}`)
      mapboxgl.accessToken = mapboxApiToken; 
      const map: Map = new mapboxgl.Map({
        container: 'map', 
        style: setMapStyleByDifficulty(difficulty),
        zoom: 7,
        maxBounds: calculateBoundingBox(city)
      });
  
      return () => map.remove();
    }, [city.name, updateDifficulty ]);
  
    return <div id="map" className='mapboxMap'/>;
  };

  export default MapboxMap;
