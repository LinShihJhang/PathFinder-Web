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
      children: [
        {
          path: '/profile',
          name: 'profile',
          component: () => import('../components/views/frontview/ProfileView.vue'),
        },
      ],
    },
  ],
});

export default router;
