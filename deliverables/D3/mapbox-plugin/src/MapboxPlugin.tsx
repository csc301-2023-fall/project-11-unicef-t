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

// The following Styles component is a <div> element, which has been styled using Emotion
// For docs, visit https://emotion.sh/docs/styled

// Theming variables are provided for your use via a ThemeProvider
// imported from @superset-ui/core. For variables available, please visit
// https://github.com/apache-superset/superset-ui/blob/master/packages/superset-ui-core/src/style/index.ts

// const Styles = styled.div<MapboxPluginStylesProps>`
//   background-color: ${({ theme }) => theme.colors.secondary.light2};
//   padding: ${({ theme }) => theme.gridUnit * 4}px;
//   border-radius: ${({ theme }) => theme.gridUnit * 2}px;
//   height: ${({ height }) => height}px;
//   width: ${({ width }) => width}px;

//   h3 {
//     /* You can use your props to control CSS! */
//     margin-top: 0;
//     margin-bottom: ${({ theme }) => theme.gridUnit * 3}px;
//     font-size: ${({ theme, headerFontSize }) =>
//       theme.typography.sizes[headerFontSize]}px;
//     font-weight: ${({ theme, boldText }) =>
//       theme.typography.weights[boldText ? 'bold' : 'normal']};
//   }

//   pre {
//     height: ${({ theme, headerFontSize, height }) =>
//       height - theme.gridUnit * 12 - theme.typography.sizes[headerFontSize]}px;
//   }
// `;

/**
 * ******************* WHAT YOU CAN BUILD HERE *******************
 *  In essence, a chart is given a few key ingredients to work with:
 *  * Data: provided via `props.data`
 *  * A DOM element
 *  * FormData (your controls!) provided as props by transformProps.ts
 */

// function MapboxPlugin(props: MapboxPluginProps) {
  // height and width are the height and width of the DOM element as it exists in the dashboard.
  // There is also a `data` prop, which is, of course, your DATA 🎉
  // const { data, height, width } = props;

  // const rootElem = createRef<HTMLDivElement>();

  // // Often, you just want to access the DOM and do whatever you want.
  // // Here, you can do that with createRef, and the useEffect hook.
  // useEffect(() => {
  //   const root = rootElem.current as HTMLElement;
  //   console.log('Plugin element', root);
  // });

  // console.log('Plugin props', props);

  // return (
  //   <Styles
  //     ref={rootElem}
  //     boldText={props.boldText}
  //     headerFontSize={props.headerFontSize}
  //     height={height}
  //     width={width}
  //   >
  //     <h3>{props.headerText}</h3>
  //     <pre>${JSON.stringify(data, null, 2)}</pre>
  //   </Styles>
  // );
// }

// export default MapboxPlugin;

  
mapboxgl.accessToken = 'pk.eyJ1IjoibmJhbGVldGEiLCJhIjoiY2xqY3AzNzJrMmpjbDNrcXp0dG5yMGMyOSJ9.55GXHudxYu9ASXD4XC3USg';

// import ReactComponent from './MapboxMap';


const MapboxPlugin = (props: MapboxPluginProps) => {
  const { data, height, width, country } = props;

  console.log('props are:', props);
  console.log('data is ', data);
  const a = JSON.stringify(data, null, 2);
  console.log('transformed data is ', a);
  console.log('country is', country);
  console.log('prop country is', props.country);


  const jsonFile = countries[country];
  console.log('jsonFile', jsonFile);
  

  const rootElem = createRef<HTMLDivElement>();

  // Often, you just want to access the DOM and do whatever you want.
  // Here, you can do that with createRef, and the useEffect hook.
  useEffect(() => {
    const root = rootElem.current as HTMLElement;
    console.log('Plugin element', root);
      
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', //  center: firstCoordinate, starting position [lng, lat]  [30.0222, -1.9596]
      zoom: 7 // starting zoom
    });
      
    map.on('load', async() => {
      const response = await fetch(jsonFile);
      const data = await response.json();
      console.log("GeoJson Data is ", data);
      const length = data.features[0].geometry.coordinates[0].length;
      const first_coord = data.features[0].geometry.coordinates[0][0];
      const last_coord = data.features[0].geometry.coordinates[0][length-1];
      const centre_coord = [(first_coord[0]+last_coord[0])/2,(first_coord[1]+last_coord[1])/2];
      console.log("Centre is ", centre_coord);

      map.addSource('rwanda-provinces', {
        'type': 'geojson',
        'data': countries[country],
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


  return (
    <div
    id="map"
    style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }}
  />
  )
}

export default MapboxPlugin