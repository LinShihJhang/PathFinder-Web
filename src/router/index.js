import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/views/LoginView.vue'),
    },
    {
      path: '/',
      name: 'frontView',
      component: () => import('../components/views/frontview/FrontView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../components/views/frontview/ProfileView.vue'),
    },
    {
      path: '/storeDetail/:id',
      name: 'storeDetail',
      component: () => import('../components/views/frontview/StoreDetail.vue'),
    },
  ],
});

export default router;
