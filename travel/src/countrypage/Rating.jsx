import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const CountryRating = ({ countryId, countryInf }) => {
  const { country: { rating } } = countryInf;
  const isTokenExisting = !sessionStorage.getItem('authToken');
  const [value, setValue] = useState(rating);
  const [isDisabled, setDisabled] = useState(false);
  const [error, setError] = useState(null);

  function createRating(vote) {
    const countryUrl = `https://oktravel.herokuapp.com/countries/${countryId}/vote`;
    const myHeaders = new Headers();
    myHeaders.append('Authorization', sessionStorage.getItem('authToken'));
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    const urlencoded = new URLSearchParams();
    urlencoded.append('rating', `${vote}`);
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow',
    };
    return fetch(countryUrl, requestOptions)
      .then((response) => response.text());
  }

  const handleRating = (event, newValue) => {
    setDisabled(true);
    createRating(newValue).then((result) => {
      if (result !== 'success') {
        setError('something went wrong, please try again');
        setTimeout(setError, 5000, null);
      }
      setDisabled(false);
      setValue(newValue);
    });
  };

  return (
    <div className="rating">
      <Typography component="legend">Rating</Typography>
      <Rating
        name="simple-controlled"
        readOnly={isTokenExisting}
        disabled={isDisabled}
        value={value}
        onChange={handleRating}
      />
      {error ? <span className="rating__error">{error}</span> : null}
    </div>
  );
};

CountryRating.propTypes = {
  countryInf: PropTypes.instanceOf(Object).isRequired,
  countryId: PropTypes.string,
};

CountryRating.defaultProps = {
  countryId: '',
};

export default CountryRating;
