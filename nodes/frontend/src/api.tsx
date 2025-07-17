import axios from "axios"
const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  withCredentials: true,
});

// Add accessToken from localStorage if exists
const token = localStorage.getItem("accessToken");
if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

// Interceptor to handle refresh and retry
api.interceptors.response.use(
  (r) => r,
  async (err) => {
    const originalRequest = err.config;

    // Check if it's a 401 and not already retried
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await api.post("/users/refresh");
        const { accessToken } = res.data;

        // Save new token
        localStorage.setItem("accessToken", accessToken);
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

        return api(originalRequest); // Retry original request
      } catch (refreshError) {
        // If refresh fails, logout user
        localStorage.removeItem("accessToken");
        window.location.href = "/login"; // or navigate("/login")
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(err);
  }
);

export default api;
