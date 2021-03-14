import React from 'react';
import { LoginForm, loginFormSubmitHandler } from './LoginForm';
import { RegistrationForm } from './RegistrationForm/RegistrationForm';
import { registrationFormSubmitHandler } from './RegistrationForm/registrationFormSubmitHandler';
import './userAuthorization.scss';

export const UserAuthorization = () => (
  <div className="user-authorization__container">
    <RegistrationForm onSubmit={registrationFormSubmitHandler} />
    <LoginForm onSubmit={loginFormSubmitHandler} />
  </div>
);
