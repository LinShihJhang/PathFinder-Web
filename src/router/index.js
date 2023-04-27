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
      component: () => import('../components/views/FrontView.vue'),
      children: [
        {
          path: '/profile',
          name: 'profile',
          component: () => import('../components/views/ProfileView.vue'),
        },
      ],
    },
  ],
});

export default router;
