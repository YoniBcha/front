import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem("token") || "");
  const user = ref(null);
  const error = ref(null);

  const setToken = (newToken) => {
    token.value = newToken;
    localStorage.setItem("token", newToken);
  };

  const login = async (formState) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        formState
      );
      setToken(response.data.access_token);
      user.value = response.data.user;
      error.value = null;
    } catch (err) {
      error.value = err.response.data.error || "Login failed";
    }
  };

  const register = async (formState) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register-employee",
        formState
      );
      setToken(response.data.token);
      user.value = response.data.user;
      error.value = null;
    } catch (err) {
      error.value = err.response.data.error || "Registration failed";
    }
  };

  const logout = () => {
    token.value = "";
    user.value = null;
    localStorage.removeItem("token");
  };

  return {
    token,
    user,
    error,
    login,
    register,
    logout,
  };
});
