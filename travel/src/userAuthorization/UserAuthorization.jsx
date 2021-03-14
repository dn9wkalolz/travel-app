import React from 'react';
import { LoginForm, loginFormSubmitHandler } from './LoginForm';

export const UserAuthorization = () => (
  <div>
    <LoginForm onSubmit={loginFormSubmitHandler} />
  </div>
);
