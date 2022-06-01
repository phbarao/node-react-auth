import axios from 'axios';

const APP_NAME = import.meta.env.VITE_APP_NAME;

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem(`@${APP_NAME}:token`);
      window.location.href = '/';
    }
  }
);

export default api;
