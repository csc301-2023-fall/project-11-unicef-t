/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { useEffect, createRef } from 'react';
import { styled } from '@superset-ui/core';
import { reactify,  } from '@superset-ui/core';
import { MapboxPluginProps, MapboxPluginStylesProps } from './types';
import countries, { countryOptions } from './countries';
import mapboxgl from 'mapbox-gl';
import d3 from 'd3';

/**
 * ******************* WHAT YOU CAN BUILD HERE *******************
 *  In essence, a chart is given a few key ingredients to work with:
 *  * Data: provided via `props.data`
 *  * A DOM element
 *  * FormData (your controls!) provided as props by transformProps.ts
 */


mapboxgl.accessToken = 'pk.eyJ1IjoibmJhbGVldGEiLCJhIjoiY2xqY3AzNzJrMmpjbDNrcXp0dG5yMGMyOSJ9.55GXHudxYu9ASXD4XC3USg';


const MapboxPlugin = (props: MapboxPluginProps) => {
  const { data, height, width, country, formData } = props;

  var NEW_DATA = {};
  
  //PARSE data
  for(let i =0; i<data.length; i++){
    const all_values = Object.values(data[i]);
    const iso_values = all_values[0];
    NEW_DATA[all_values[1]] = iso_values;
  }
  
  //This code changes dataset values relatively so that the map create a better display
  const cleanedData = NEW_DATA;
  const min_value = Math.min(...Object.values(cleanedData));
  const rounded_min_value = Math.pow(10, Math.floor(Math.log10(min_value)));
  const factor = 100000 / rounded_min_value;

  // //Clean dataset. connection issues may cause NAN values. Add this code if you have connection problems.

  // const cleanedData = Object.keys(cleanedData).reduce((result, key) => {
  //   if (!isNaN(NEW_DATA[key])) {
  //     result[key] = NEW_DATA[key];
  //   }
  //   return result;
  // }, {});

  const jsonFile = countries[country];  

  const rootElem = createRef<HTMLDivElement>();

  // Often, you just want to access the DOM and do whatever you want.
  // Here, you can do that with createRef, and the useEffect hook.
  useEffect(() => {
    const root = rootElem.current as HTMLElement;
      
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', //  center: firstCoordinate, starting position [lng, lat]  [30.0222, -1.9596]
      zoom: 7 // starting zoom
    });
      
    // Loading in default data (population density in rwanda)
    map.on('load', async() => {
      const response = await fetch(jsonFile);
      const geodata = await response.json();
      const length = geodata.features[0].geometry.coordinates[0].length;
      const first_coord = geodata.features[0].geometry.coordinates[0][0];
      const last_coord = geodata.features[0].geometry.coordinates[0][length-1];
      const centre_coord = [(first_coord[0]+last_coord[0])/2,(first_coord[1]+last_coord[1])/2];

      var mapdata = geodata;


      for (let i=0; i<mapdata.features.length; i++){
          const ISO_code = mapdata.features[i].properties.ISO;
          const population_value = cleanedData[ISO_code];
          mapdata.features[i].properties.population = population_value*factor;
      }

      map.addSource('rwanda-provinces', {
        'type': 'geojson',
        'data': mapdata,
      });
      map.flyTo({
          center: centre_coord //[30.0242, -1.9576]
      });
      map.addLayer({
        'id': 'rwanda-provinces',
        'type': 'fill',
        'source': 'rwanda-provinces',
        'layout': {},
        'paint': {
        'fill-color': [
        'let',
        'density',
        ['/', ['get', 'population'], ['get', 'sq-km']],
        [
        'interpolate',
        ['linear'],
        ['zoom'],
        8,
        [
        'interpolate',
        ['linear'],
        ['var', 'density'],
        274,
        ['to-color', '#f5e5f3'],
        1551,
        ['to-color', '#8d00ac']
        ],
        10,
        [
        'interpolate',
        ['linear'],
        ['var', 'density'],
        274,
        ['to-color', '#eff3ff'],
        1551,
        ['to-color', '#08519c']
        ]
        ]
        ],
        'fill-opacity': 0.7
        }
      },
      'road-label' // Place polygons under labels
      );
      });
  });


  // Returning jsx with id "map", refering to the mapboxgl.Map instance above
  return (
    <div
    id="map"
    style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }}
  />
  )
}

export default MapboxPlugin