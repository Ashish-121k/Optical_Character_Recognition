// src/lib/api.js
import axios from "axios";

// point to your backend URL directly since you’re using CORS
const API_BASE = "http://localhost:8000/api/v1/users";

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true, // include cookies (refresh token)
});

// Attach access token from localStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add after interceptors.request
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshRes = await api.post("/refresh-token"); // cookie auto-sent
        const { accessToken } = refreshRes.data.data;
        localStorage.setItem("accessToken", accessToken);
        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest); // retry
      } catch (refreshError) {
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);


export default api;
