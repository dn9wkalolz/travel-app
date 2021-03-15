import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getPhrase from './languageSwitcher';

const DataTime = ({ lang, timezone }) => {
  const [time, setTime] = useState('');

  const tick = () => {
    const date = new Date();
    const options = {
      timeZone: timezone,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    };
    setTime(date.toLocaleString(lang, options));
  };

  useEffect(() => {
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [lang]);

  return (
    <div className="country__widgets__datatime">
      <h3 data-testid="currenttime">{getPhrase(lang, 'currentTime')}</h3>
      <span>{time}</span>
    </div>
  );
};

DataTime.propTypes = {
  lang: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
};

export default DataTime;
