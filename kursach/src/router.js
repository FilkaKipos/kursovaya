import { createRouter, createWebHistory } from 'vue-router';

import Auth from './components/auth.vue';
import Projects from './components/project.vue';
import NewProject from './components/newProject.vue';
import Sign from './components/sign.vue';
import Home from './components/home.vue'

const routes = [
  { path: '/auth', component: Auth },
  { path: '/projects', component: Projects },
  { path: '/new-project', component: NewProject },
  { path: '/sign', component: Sign},
  { path: '/home', component: Home},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;