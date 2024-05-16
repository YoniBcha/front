export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore(); // Get the Pinia store instance

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    return navigateTo("/landingPage/home");
  }
});
