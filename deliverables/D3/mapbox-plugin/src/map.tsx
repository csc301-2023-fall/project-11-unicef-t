import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import rwandaGeoJSON from './countries/rwanda2.geojson';


mapboxgl.accessToken = 'pk.eyJ1IjoibmJhbGVldGEiLCJhIjoiY2xqY3AzNzJrMmpjbDNrcXp0dG5yMGMyOSJ9.55GXHudxYu9ASXD4XC3USg';

function Mapbox() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [30.0222, -1.9596], // starting position [lng, lat]
      zoom: 7, // starting zoom
    });

    map.on('load', () => {
      map.addSource('rwanda-provinces', {
        type: 'geojson',
        data: rwandaGeoJSON, //https://docs.mapbox.com/mapbox-gl-js/assets/rwanda-provinces.geojson
      });

      map.addLayer(
        {
          id: 'rwanda-provinces',
          type: 'fill',
          source: 'rwanda-provinces',
          layout: {},
          paint: {
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
                  ['to-color', '#8d00ac'],
                ],
                10,
                [
                  'interpolate',
                  ['linear'],
                  ['var', 'density'],
                  274,
                  ['to-color', '#eff3ff'],
                  1551,
                  ['to-color', '#08519c'],
                ],
              ],
            ],
            'fill-opacity': 0.7,
          },
        },
        'road-label' // Place polygons under labels
      );
    });
  }, []);

  return (
    <div
      id="map"
      style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }}
    />
  );
}

export default Mapbox;
