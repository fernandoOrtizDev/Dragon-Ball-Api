import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dragonball-api.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
