import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '~/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "Home" */ '../views/home/Home.vue'),
    async beforeEnter(to, from, next) {
      await store.dispatch('tasks/fetch');
      next();
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
