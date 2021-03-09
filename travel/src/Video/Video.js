import React from 'react';
import Box from '@material-ui/core/Box';

const Video = () => (
  <Box display="flex" justifyContent="center" mt={2}>
    <iframe width="310" height="200" title="country-video" src="https://www.youtube.com/embed/hQRPsKzpo34" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
  </Box>
);

export default Video;
