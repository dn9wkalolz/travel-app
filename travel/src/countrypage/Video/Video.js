import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import './video.scss';

const Video = ({ countryInf }) => {
  const { country } = countryInf;
  const { video } = country[0];
  return (
    <Box display="flex" justifyContent="center" my={2}>
      <iframe className="country_video" title="country-video" src={video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </Box>
  );
};

Video.propTypes = {
  countryInf: PropTypes.instanceOf(Object).isRequired,
};

export default Video;
