import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Tasks from '../components/Tasks.vue';
import Units from '../components/Units.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/tasks', component: Tasks },
  { path: '/units', component: Units },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
