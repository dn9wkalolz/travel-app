import React from 'react';
import { LoginForm, loginFormSubmitHandler } from './LoginForm';
import './userAuthorization.scss';

export const UserAuthorization = () => (
  <div className="user-authorization__container">
    <LoginForm onSubmit={loginFormSubmitHandler} />
  </div>
);
