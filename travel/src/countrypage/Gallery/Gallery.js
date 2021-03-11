/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './gallery.scss';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Fullscreen, useFullscreen } from 'react-fullscreen-html';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    position: 'relative',
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
}));

const Gallery = ({ countryInf }) => {
  const [count, setCount] = useState(0);
  const { country } = countryInf;
  const { galleryImages } = country[0];
  const classes = useStyles();
  const screen = useFullscreen();
  const countDecrease = () => {
    // eslint-disable-next-line no-unused-expressions
    count > 0 ? setCount(count - 1) : setCount(0);
  };
  const countIncrease = () => {
    // eslint-disable-next-line no-unused-expressions
    (count < galleryImages.length - 1
      ? setCount(count + 1) : setCount(galleryImages.length - 1));
  };

  return (
    <Fullscreen handle={screen}>
      <div className="gallery_wrapper">
        <div className={screen.active ? 'gallery_fullscreen' : 'gallery'}>
          <div className="image_wrapper">
            {galleryImages.map((item, index) => (
              <div
                className={screen.active ? 'gallery_image_fullscreen' : 'gallery_image'}
                key={item.mainImage}
                itemID={index}
              >
                <img className={index === count ? 'gallery_img_show gallery_img' : 'gallery_img'} src={item.mainImage} alt={item.alt} />
              </div>
            ))}
            <div className="caption_container">
              { screen.active ? <FullscreenExitIcon className="full_screen_button" onClick={screen.exit} /> : <FullscreenIcon className="full_screen_button" onClick={screen.enter} />}
              <p className={screen.active ? 'caption_fullscreen' : 'caption'}>
                {screen.active ? galleryImages[count].description : galleryImages[count].alt}
              </p>
            </div>
            <div
              className="button_prev"
              onClick={() => {
                countDecrease();
              }}
            >
              &#10094;
            </div>
            <div
              className="button_next"
              onClick={() => {
                countIncrease();
              }}
            >
              &#10095;
            </div>
          </div>
          <div className={classes.root}>
            <GridList className={classes.gridList} cols={6}>
              {galleryImages.map((item, index) => (
                <GridListTile
                  key={item.thumbnail}
                  itemID={index}
                  className={index === count ? 'preview_item_active' : 'preview_item'}
                  onClick={() => setCount(index)}
                >
                  <img src={item.thumbnail} height="100" alt={item.alt} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </div>
      </div>
    </Fullscreen>
  );
};

Gallery.propTypes = {
  countryInf: PropTypes.instanceOf(Object).isRequired,
};

export default Gallery;
