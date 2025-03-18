import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { config } from './config.js';

export const client: AxiosInstance = axios.create();

export type AxiosEnv = {
  api: {
    url: string;
  };
};

export function initialize(environment: AxiosEnv = config) {
  // Configure defaults
  client.defaults.baseURL = environment.api.url;
  client.defaults.headers.common['Content-Type'] = 'application/json';

  // Request interceptor
  client.interceptors.request.use(
    (config) => {
      // You can add auth tokens or other headers here
      return config;
    },
    (error: AxiosError) => {
      console.error('Axios Request ERROR:', error);
      return Promise.reject(error);
    }
  );

  // Response interceptor
  client.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Response Error:', {
          status: error.response.status,
          data: error.response.data,
          headers: error.response.headers,
        });
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request Error:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error:', error.message);
      }

      return Promise.reject(error);
    }
  );
}

// Export a type-safe instance
export default client;
