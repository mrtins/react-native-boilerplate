import axios from 'axios';

import { apiURL } from '../config/constants';

const instance = axios.create({ baseURL: apiURL, timeout: 600000 })

export default {
  get: (url, data) => {
    return request('get', url, data, token);
  },
  post: (url, data) => {
    return request('post', url, data, token);
  },
  put: (url, data) => {
    return request('put', url, data, token);
  },
  delete: (url, data) => {
    return request('delete', url, data, token);
  },
  auth: (data) => {
    return auth(data);
  }
}

const request = (method, url, data, token) => {
  if (method === 'get') {
    return instance.request({
      method, url, params: data, headers: { 'Authorization': `your_token` }
    }).then(res => res.data)
      .catch(err => handleError(err));
  } else {
    return instance.request({
      method, url, data, headers: { 'Authorization': `your_token` }
    }).then(res => res.data)
      .catch(err => handleError(err))
  }
}

const handleError = (err) => {
  if (err.response.data) {
    throw err.response.data;
  } else if (err.response) {
    throw err.response;
  } else {
    throw err;
  }
}