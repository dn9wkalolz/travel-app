import { API_OK_TRAVEL_ENDPOINTS } from '../../const';

export const loginFormSubmitHandler = async (formValues) => {
  const formValuesEntries = Object.entries(formValues);
  const body = formValuesEntries.map((item) => item.join('=')).join('&');

  const response = await fetch(API_OK_TRAVEL_ENDPOINTS.login, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body,
  });

  if (response.status !== 200) {
    sessionStorage.removeItem('authToken');
    throw new Error(`Error: ${response.status}, ${response.statusText}`);
  }
  const { token } = await response.json();

  sessionStorage.setItem('authToken', token);
};
