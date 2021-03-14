import { API_OK_TRAVEL_ENDPOINTS } from '../../const';

export const loginFormSubmitHandler = async (formValues) => {
  const formValuesEntries = Object.entries(formValues);
  const body = formValuesEntries.map((item) => item.join('=')).join('&');

  try {
    await fetch(API_OK_TRAVEL_ENDPOINTS.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body,
    });
  } catch (error) {
    // TO_DO: implement error handler
    // eslint-disable-next-line
    console.log('Error:', error);
  }
};
