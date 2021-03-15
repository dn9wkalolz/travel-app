import React from 'react';
import PropTypes from 'prop-types';
import './video.scss';

const Video = ({ countryInf }) => {
  const { country } = countryInf;
  const { video } = country;
  return (
    <div className="country_video_wrapper">
      <iframe className="country_video" title="country-video" src={video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </div>
  );
};

Video.propTypes = {
  countryInf: PropTypes.instanceOf(Object).isRequired,
};

export default Video;
