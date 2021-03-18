import React from 'react';
import { Grid } from '@material-ui/core';
import { LoginForm, loginFormSubmitHandler } from './LoginForm';
import { RegistrationForm } from './RegistrationForm/RegistrationForm';
import { registrationFormSubmitHandler } from './RegistrationForm/registrationFormSubmitHandler';

export const UserAuthorization = () => (
  <Grid container justify="space-around" spacing={5}>
    <RegistrationForm onSubmit={registrationFormSubmitHandler} />
    <LoginForm onSubmit={loginFormSubmitHandler} />
  </Grid>

);
