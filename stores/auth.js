import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async login(credentials) {
      try {
        // Replace with your API call to login (consider using `useFetch` from `nuxt/app`)
        const response = await useFetch("http://127.0.0.1:8000/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });

        if (!response.ok) {
          throw new Error("Login failed");
        }

        const data = await response.json();
        this.user = data.user; // Assuming API response structure
        this.token = data.token; // Assuming API provides a token
      } catch (error) {
        console.error(error);
        throw error; // Re-throw for handling in component
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      // Handle logout logic (e.g., remove tokens, redirect)
    },
  },
  getters: {
    isLoggedIn() {
      return !!this.user; // Check if user is present
    },
  },
});
