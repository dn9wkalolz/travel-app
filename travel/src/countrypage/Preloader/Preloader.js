import React from 'react';
import './preloader.scss';

const Preloader = () => (
  <div className="preloader preloader_active">
    <div className="preloader_wrapper">
      <div className="preloader_item preloader_item_1" />
      <div className="preloader_item preloader_item_2" />
      <div className="preloader_item preloader_item_3" />
      <div className="preloader_item preloader_item_4" />
      <div className="preloader_item preloader_item_5" />
    </div>
  </div>
);

export default Preloader;
