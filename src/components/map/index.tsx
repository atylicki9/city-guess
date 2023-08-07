import './map.css';
import React, { useEffect } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import {calculateBoundingBox, Coords} from '../../utility/mapUtility'
import { City } from '../../utility/city';

interface Props {
  city: City
}

const MapboxMap: React.FC<Props> = (props: Props) => {
  
    if (props.city.latitude == undefined || props.city.longitude == undefined)
    {
      throw Error(`There is an underfined coordinate in ${props.city.name}`)
    }

    useEffect(() => {
      mapboxgl.accessToken = 'pk.eyJ1IjoiYXR5bGlja2kiLCJhIjoiY2xrcHplOWRmMW9jejNrcjF5Zm5xcHJyMyJ9.7IpsnYSPH9TqHColAwrXbg'; // make secure key
      const map: Map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/atylicki/clkq8f6ac01i401p21tpg1krd',
        zoom: 7,
        maxBounds: calculateBoundingBox(props.city)
      });
  
      return () => map.remove();
    }, [props.city]);
  
    return <div id="map" className='mapboxMap'/>;
  };

  export default MapboxMap;
