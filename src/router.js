/* eslint-disable linebreak-style */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Search.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: Home,
    },
  ],
});
