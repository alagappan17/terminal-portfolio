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
      return Promise.reject(error);
    }
  );

  // Response interceptor
  client.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      // Don't log the full error details
      return Promise.reject(error);
    }
  );
}

// Export a type-safe instance
export default client;
