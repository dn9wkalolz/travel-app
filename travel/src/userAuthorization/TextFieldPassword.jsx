import React, { useState } from 'react';
import { InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { TextFieldInput } from './TextFieldInput';
import { minLengthValidation } from './formValidation';

export const TextFieldPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <TextFieldInput
      name="password"
      type={showPassword ? 'text' : 'password'}
      validate={minLengthValidation(4)}
      inputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
