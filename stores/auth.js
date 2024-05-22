// stores/auth.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem("token") || "");
  const user = ref(null);
  const errorMessage = ref("");

  const setToken = (newToken) => {
    token.value = newToken;
    localStorage.setItem("token", newToken); // Store token in localStorage
  };

  const login = async (formState) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      setToken(data.access_token); // Set token after successful login
      user.value = data.user;
      errorMessage.value = "";
    } catch (err) {
      errorMessage.value = err.message || "Login failed";
    }
  };

  const logout = () => {
    token.value = "";
    user.value = null;
    localStorage.removeItem("token"); // Remove token from localStorage on logout
  };

  return {
    token,
    user,
    errorMessage,
    login,
    logout,
  };
});
