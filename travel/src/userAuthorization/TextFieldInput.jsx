import React from 'react';
import { useField } from 'react-final-form';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

export const TextFieldInput = ({
  name, inputProps, validate, ...props
}) => {
  const { input, meta } = useField(name, { validate });
  const isError = Boolean(meta.error);

  return (
    <TextField
      {...input}
      {...props}
      InputProps={inputProps}
      placeholder={name}
      error={isError}
      helperText={meta.error}
      style={!isError ? { marginBottom: '22px' } : undefined}
    />
  );
};

TextFieldInput.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  inputProps: PropTypes.instanceOf(Object),
};

TextFieldInput.defaultProps = {
  validate: undefined,
  inputProps: undefined,
};
