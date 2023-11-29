// import d3 from 'd3';
// import PropTypes from 'prop-types';

// import mapboxgl from 'mapbox-gl';

// import countries, { countryOptions } from './countries';
// import React, { Component, useEffect } from 'react';


// class MapComponent extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         map: null,
//       };
//     }
  
//     componentDidMount() {
//       const {
//         data,
//         width,
//         height,
//         country,
//         linearColorScheme,
//         numberFormat,
//         colorScheme,
//         sliceId,
//       } = this.props;
//       console.log('mount props', this.props);

//       mapboxgl.accessToken = 'pk.eyJ1IjoibmJhbGVldGEiLCJhIjoiY2xqY3AzNzJrMmpjbDNrcXp0dG5yMGMyOSJ9.55GXHudxYu9ASXD4XC3USg'
//       const map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v12',
//         center: [30.0222, -1.9596],
//         zoom: 7,
//       });
  
//       map.on('load', () => {
//         let center = [30.0222, -1.9596]; // Need to change center here
//         map.addSource('rwanda-provinces', {
//           type: 'geojson',
//           data: countries[country],
//         });
//         map.addLayer({
//           id: 'rwanda-provinces',
//           type: 'fill',
//           source: 'rwanda-provinces',
//           layout: {},
//           paint: {
//             'fill-color': [
//               'let',
//               'density',
//               ['/', ['get', 'population'], ['get', 'sq-km']],
//               [
//                 'interpolate',
//                 ['linear'],
//                 ['zoom'],
//                 8,
//                 [
//                   'interpolate',
//                   ['linear'],
//                   ['var', 'density'],
//                   274,
//                   ['to-color', '#f5e5f3'],
//                   1551,
//                   ['to-color', '#8d00ac'],
//                 ],
//                 10,
//                 [
//                   'interpolate',
//                   ['linear'],
//                   ['var', 'density'],
//                   274,
//                   ['to-color', '#eff3ff'],
//                   1551,
//                   ['to-color', '#08519c'],
//                 ],
//               ],
//             ],
//             'fill-opacity': 0.7,
//           },
//         }, 'road-label');
//         map.flyTo({
//             center: center
//         });
//       });
  
//       this.setState({ map });
//     }
  
//     render() {
//       console.log('render props', this.props);
//       return (
//         <div>
//           <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} />
//         </div>
//       );
//     }
//   }
  
// export default MapComponent;

// // const map = new mapboxgl.Map({
// //     container: 'map', // container ID
// //     // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
// //     style: 'mapbox://styles/mapbox/streets-v12', // style URL
// //     center: [30.0222, -1.9596], // starting position [lng, lat]
// //     zoom: 7 // starting zoom
// // });
