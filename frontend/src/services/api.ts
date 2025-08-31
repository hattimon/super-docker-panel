import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

export const getContainers = async (token: string) => {
  const response = await axios.get(`${API_URL}/containers`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getSystem = async (token: string) => {
  const response = await axios.get(`${API_URL}/system`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
