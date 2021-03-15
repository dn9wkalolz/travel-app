/* eslint-disable import/prefer-default-export */
import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://oktravel.herokuapp.com/',
});

export const userAPI = {
  getCountries(lang) {
    return instance
      .get(`countries?lang=${lang}`)
      .then((response) => response.data);
  },
};
