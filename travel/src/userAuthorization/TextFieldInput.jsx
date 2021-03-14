import React from 'react';
import { useField } from 'react-final-form';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

export const TextFieldInput = ({ name, inputProps, ...props }) => {
  const { input } = useField(name);
  return (
    <TextField
      {...input}
      {...props}
      InputProps={inputProps}
      placeholder={name}
    />
  );
};

TextFieldInput.propTypes = {
  name: PropTypes.string.isRequired,
  inputProps: PropTypes.instanceOf(Object),
};

TextFieldInput.defaultProps = {
  inputProps: undefined,
};
