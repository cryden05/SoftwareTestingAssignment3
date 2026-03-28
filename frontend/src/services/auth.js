import { api } from './api';
import jwtDecode from 'jwt-decode';

export const auth = {
  login: async (username, password) => {
    const response = await api.post('/users/login', { username, password });
    return response.data;
  },
  decodeToken: (token) => {
    return jwtDecode(token);
  },
};