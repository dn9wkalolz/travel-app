/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

const DataTime = ({ language, timeZone }) => {
  const [time, setTime] = useState('');

  const tick = () => {
    const date = new Date();
    const options = {
      timeZone,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    };
    setTime(date.toLocaleString(language, options));
  };

  useEffect(() => {
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="country__widgets__datatime">
      <h3>Current Time</h3>
      <span>{time}</span>
    </div>
  );
};

export default DataTime;
