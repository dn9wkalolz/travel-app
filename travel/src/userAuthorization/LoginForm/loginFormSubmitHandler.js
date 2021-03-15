import { API_OK_TRAVEL_ENDPOINTS } from '../../const';

export const loginFormSubmitHandler = async (formValues) => {
  const formValuesEntries = Object.entries(formValues);
  const body = formValuesEntries.map((item) => item.join('=')).join('&');

  try {
    const response = await fetch(API_OK_TRAVEL_ENDPOINTS.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body,
    });

    const { token } = await response.json();

    sessionStorage.setItem('authToken', token);
  } catch (error) {
    // TO_DO: implement error handler
    // eslint-disable-next-line
    console.log('Error:', error);
  }
};
