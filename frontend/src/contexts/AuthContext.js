import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, api } from '../services';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      api.setToken(JSON.parse(storedUser).token);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const { token } = await auth.login(username, password);
      const decodedUser = auth.decodeToken(token);
      decodedUser.token = token;
      localStorage.setItem('user', JSON.stringify(decodedUser));
      setUser(decodedUser);
      api.setToken(token);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    api.setToken(null);
    navigate('/login');
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};