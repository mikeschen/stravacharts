import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
});

router.beforeEach(async (to) => {
  const token = localStorage.getItem('access_token');
  if (!token && to.name !== 'login') {
    return { name: 'login' };
  }
});

export default router;

// import { createRouter } from 'vue-router';
// const router = createRouter({
//   // ...
// });

// // ❌ Depending on the order of imports this will fail
// const store = useStore();

// router.beforeEach((to, from, next) => {
//   // we wanted to use the store here
//   if (store.isLoggedIn) next();
//   else next('/login');
// });

// router.beforeEach((to) => {
//   // ✅ This will work because the router starts its navigation after
//   // the router is installed and pinia will be installed too
//   const store = useStore();

//   if (to.meta.requiresAuth && !store.isLoggedIn) return '/login';
// });
