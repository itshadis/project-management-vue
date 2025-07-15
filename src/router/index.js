import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../pages/OverviewPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overview',
      component: Overview,
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/ProjectsPage.vue'),
    },
    {
      path: '/scheduled',
      name: 'scheduled',
      component: () => import('../pages/ScheduledPage.vue'),
    },
    {
      path: '/messages',
      name: 'messages',
      component: () => import('../pages/MessagesPage.vue'),
    },
    {
      path: '/online-meeting',
      name: 'online-meeting',
      component: () => import('../pages/MeetingPage.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../pages/SettingsPage.vue'),
    },
  ],
})

export default router
