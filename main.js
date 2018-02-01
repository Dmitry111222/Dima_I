'use strict';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const contacts = require('./contacts.vue').default;
const bio = require('./bio.vue').default;
const home = require('./home.vue').default;

const routes = [
    { path: '/contacts', component: contacts },
    { path: '/bio', component: bio },
    { path: '/home', component: home }
  ];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app');
