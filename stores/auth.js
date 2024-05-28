// stores/auth.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false,
    user: null,
    token: null,
  }),
  actions: {
    async login(credentials) {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });
        if (!response.ok) {
          throw new Error("Login failed");
        }
        const data = await response.json();
        this.isLoggedIn = true;
        this.user = data.user;
        this.token = data.token;
        localStorage.setItem("token", data.token);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      this.isLoggedIn = false;
      localStorage.removeItem("token");
    },
    async checkAuth() {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await fetch("http://127.0.0.1:8000/api/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (!response.ok) {
            throw new Error("Authentication failed");
          }
          const data = await response.json();
          this.isLoggedIn = true;
          this.user = data.user;
        } catch (error) {
          console.error(error);
          this.logout();
        }
      }
    },
  },
  getters: {
    isAuthenticated() {
      return this.isLoggedIn;
    },
  },
});
