import axios from 'axios';
export const ROOT_URL = 'https://jibjob-api.herokuapp.com/api/';

export const setAuthorizationToken = function (token: string) {
  if (token) {
    axios.defaults.headers.common.Authorization = `${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};