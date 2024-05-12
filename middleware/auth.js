export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore(); // Get the Pinia store instance

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    // Redirect to login page if route requires auth and user isn't logged in
    return navigateTo("/login");
  }
});
