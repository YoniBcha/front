import axios from "axios";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

instance.interceptors.request.use(
  (config) => {
    const token = authStore.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
