import axios from "axios";

// Automatically appends /api so you don't have to type it everywhere
const getBaseUrl = () => {
  const url = import.meta.env.VITE_API_URL || "https://trading-learning-platform.onrender.com";
  return url.endsWith("/") ? `${url}api` : `${url}/api`;
};

const token = localStorage.getItem("token");
const response = await api.post("/api/trades", newTrade, {
  headers: { Authorization: `Bearer ${token}` }
});

const api = axios.create({
  baseURL: getBaseUrl(),
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;