import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'connexion',
    path: '/connexion',
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
