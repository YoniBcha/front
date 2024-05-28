// middleware/auth.js
export default async function ({ store, redirect }) {
    await store.dispatch('auth/checkAuth');
    if (!store.state.auth.isAuthenticated) {
      return redirect('/login');
    }
  }
  