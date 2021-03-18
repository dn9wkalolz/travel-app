/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './gallery.scss';

const Gallery = ({ countryInf }) => {
  const [count, setCount] = useState(0);
  const galleryRef = useRef();
  const { country } = countryInf;
  const { galleryImages } = country;

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      galleryRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const showPrev = () => (count === 0 ? setCount(galleryImages.length - 1) : setCount(count - 1));
  const showNext = () => (count === galleryImages.length - 1 ? setCount(0) : setCount(count + 1));

  return (
    <div className="gallery_wrapper" ref={galleryRef}>
      <div className="image_main_wrapper">
        <div className="caption_container">
          <p className="image_main_name" data-testid="title">
            {galleryImages[count].alt}
          </p>
          <p className="image_main_description" data-testid="description">
            {galleryImages[count].description}
          </p>
          <div className="button_fullscreen" onClick={toggleFullscreen} />
        </div>
        <div className="button_prev" onClick={showPrev}>
          &#10094;
        </div>
        <div className="button_next" onClick={showNext}>
          &#10095;
        </div>
        {galleryImages.map((item, index) => (
          <img
            className={
              index === count ? 'image_main image_main_show' : 'image_main'
            }
            src={item.mainImage}
            alt={item.alt}
            onClick={toggleFullscreen}
            key={item.mainImage}
          />
        ))}
      </div>
      <div className="thumb_wrapper">
        {galleryImages.map((item, index) => (
          <img
            className={
              index === count
                ? 'image_thumbnail image_thumbnail_active'
                : 'image_thumbnail'
            }
            onClick={() => setCount(index)}
            src={item.thumbnail}
            alt={item.alt}
            key={item.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  countryInf: PropTypes.instanceOf(Object).isRequired,
};

export default Gallery;
