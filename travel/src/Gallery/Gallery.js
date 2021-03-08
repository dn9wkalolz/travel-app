/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './gallery.css';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Fullscreen, useFullscreen } from 'react-fullscreen-html';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

const imageLinksLibrary = [
  'https://russianplanes.net/images/to271000/270331.jpg',
  'https://russianplanes.net/images/to269000/268392.jpg',
  'https://russianplanes.net/images/to238000/237498.jpg',
  'https://russianplanes.net/images/to277000/276528.jpg',
  'https://russianplanes.net/images/to180000/179923.jpg',
  'https://russianplanes.net/images/to254000/253139.jpg',
  // 'https://russianplanes.net/images/to263000/262475.jpg',
  // 'https://russianplanes.net/images/to275000/274157.jpg',
  // 'https://russianplanes.net/images/to267000/266680.jpg',
  // 'https://russianplanes.net/images/to267000/266697.jpg',
  // 'https://russianplanes.net/images/to248000/247127.jpg',
  // 'https://russianplanes.net/images/to266000/265182.jpg',
  // 'https://russianplanes.net/images/to178000/177881.jpg',
  // 'https://russianplanes.net/images/to166000/165952.jpg',
  // 'https://russianplanes.net/images/to142000/141759.jpg',
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
}));

const Gallery = () => {
  const [count, counter] = useState(0);
  const classes = useStyles();
  const screen = useFullscreen();
  const countDecrease = () => {
    // eslint-disable-next-line no-unused-expressions
    count > 0 ? counter(count - 1) : counter(0);
  };
  const countIncrease = () => {
    // eslint-disable-next-line no-unused-expressions
    (count < imageLinksLibrary.length - 1
      ? counter(count + 1) : counter(imageLinksLibrary.length - 1));
  };

  // const toggleFullscreen = () => {
  //   if (!document.fullscreenElement) {
  //     document.documentElement.requestFullscreen();
  //   }
  // };

  return (
    <Container>
      <Fullscreen handle={screen}>
        <div className={screen.active ? 'gallery_fullscreen' : 'gallery'}>
          <div className="image_wrapper">
            {imageLinksLibrary.map((item, index) => (
              <div
                className={index === count ? 'gallery_image_shown gallery_image' : 'gallery_image'}
                key={item}
                itemID={index}
              >
                <img height="100%" src={item} alt="foto" />
              </div>
            ))}
            <div className="caption-container">
              { screen.active ? <FullscreenExitIcon className="full_screen_button" onClick={screen.exit} /> : <FullscreenIcon className="full_screen_button" onClick={screen.enter} />}
              <p className="caption">Lorem ipsum</p>
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
            <GridList cellHeight={window.innerWidth > 600 ? '100' : '50'} className={classes.gridList} cols={6}>
              {imageLinksLibrary.map((item, index) => (
                <GridListTile
                  key={item}
                  itemId={index}
                  className={index === count ? 'preview_item_active' : 'preview_item'}
                  onClick={() => counter(index)}
                >
                  <img src={item} alt="preview" />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </div>
      </Fullscreen>
    </Container>

  );
};

export default Gallery;
