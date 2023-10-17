import axios from 'axios';

import { BASE_URL } from '../configs/urls';

const http = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
