// middleware/role.js
export default function ({ store, redirect, route }) {
    const userRole = store.state.auth.user?.role;
    if (route.path.startsWith('/admin') && userRole !== 'admin') {
      return redirect('/');
    }
  }
  