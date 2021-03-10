import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import getBoundaryColor from './getBoundaryColor';

mapboxgl.accessToken = 'pk.eyJ1IjoiZmFudG9td2Fsa2VyIiwiYSI6ImNramxmcXd2eTIyc2Iyc2xvcTJ3cmdsNmwifQ.mU8FFb3Kc3cihmCMAk6Spw';

const CountryMap = ({ data }) => {
  const {
    longitude, latitude, language, countryName,
  } = data;
  const mapContainer = useRef();
  const [lng, setLng] = useState(longitude);
  const [lat, setLat] = useState(latitude);
  const [zoom, setZoom] = useState(4.5);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom,
    });

    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    map.addControl(new mapboxgl.FullscreenControl());

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    map.on('load', () => {
      map.addSource('countries', {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1',
      });
      map.addLayer(
        {
          id: 'countries-join',
          type: 'line',
          source: 'countries',
          'source-layer': 'country_boundaries',
          paint: {
            'line-color': getBoundaryColor(countryName),
            'line-width': 4,
          },
        },
        'admin-1-boundary-bg',
      );
      map.setLayoutProperty('country-label', 'text-field', [
        'get',
        `name_${language}`,
      ]);
    });

    return () => map.remove();
  }, []);

  return (
    <div>
      <div className="sidebar">
        {` Longitude: ${lng} | Latitude: ${lat} | Zoom: ${zoom}`}
      </div>
      <div className="map-container" ref={mapContainer} />
    </div>
  );
};

CountryMap.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default CountryMap;
