import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import getBoundaryColor from './getBoundaryColor';
import getPhrase from './languageSwitcher';

mapboxgl.accessToken = 'pk.eyJ1IjoiZmFudG9td2Fsa2VyIiwiYSI6ImNramxmcXd2eTIyc2Iyc2xvcTJ3cmdsNmwifQ.mU8FFb3Kc3cihmCMAk6Spw';

const CountryMap = ({ data, countryInf }) => {
  const { language } = data;
  const { country } = countryInf;
  const { alpha3Code, location: { lat, long } } = country;
  const mapContainer = useRef();
  const [longitude, setLng] = useState(long);
  const [latitude, setLat] = useState(lat);
  const [zoom, setZoom] = useState(4.5);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom,
    });

    new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
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
            'line-color': getBoundaryColor(alpha3Code),
            'line-width': 4,
          },
        },
        'admin-1-boundary-bg',
      );

      const labelList = map.getStyle().layers.filter((layer) => /-label/.test(layer.id));
      labelList.forEach((labelLayer) => {
        map.setLayoutProperty(labelLayer.id, 'text-field', ['coalesce', ['get', `name_${language}`], ['get', 'name']]);
      });
    });

    return () => map.remove();
  }, [language]);

  return (
    <div className="map_wrapper">
      <div className="sidebar">
        {`${getPhrase(language, 'lng')}: ${longitude} | ${getPhrase(language, 'lat')}: ${latitude} | ${getPhrase(language, 'zoom')}: ${zoom}`}
      </div>
      <div className="map-container" ref={mapContainer} />
    </div>
  );
};

CountryMap.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  countryInf: PropTypes.instanceOf(Object).isRequired,
};

export default CountryMap;
