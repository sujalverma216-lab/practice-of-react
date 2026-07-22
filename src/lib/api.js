import axios from "axios";

// Set VITE_API_URL to the public URL of the deployed API (without /api).
// The localhost fallback keeps development simple.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://trading-learning-platform.onrender.com",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
