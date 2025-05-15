// src/services/authService.js
import axios from 'axios';

const API = 'http://localhost:5000/api/auth'; // Change if using a different port

const login = async (credentials) => {
  const res = await axios.post(`${API}/login`, credentials);
  return res.data;
};

const authService = { login };
export default authService;
