import React from 'react';
import { useField } from 'react-final-form';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

export const TextFieldInput = ({ name }) => {
  const { input } = useField(name);
  return (
    <TextField
      {...input}
      placeholder={name}
    />
  );
};

TextFieldInput.propTypes = {
  name: PropTypes.string.isRequired,
};
