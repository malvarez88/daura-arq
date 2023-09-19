import axios from 'axios';
import { API_TOKEN, API_URL } from '../config';

const baseURL = API_URL;

const responseHandler = (response) => {
  const { data, error } = response;
  if (data) {
    return data;
  }
  return Promise.reject(error);
};

class AxiosSingleton {
  static axiosInstance = null;

  static getInstance() {
    const instance = axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    instance.interceptors.response.use(responseHandler, (error) => Promise.reject(error));
    this.axiosInstance = instance;
    return this.axiosInstance;
  }
}

const axiosInstance = () => AxiosSingleton.getInstance();

export { axiosInstance, AxiosSingleton };
