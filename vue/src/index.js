import Vue from 'vue'
import Vuex from 'vuex'

import App from './App'
import {
  userStore,
  followersStore,
  followingsStore,
} from 'pages/Home/store'

import VueRouter from 'vue-router'

import Home from 'pages/Home'
import Test from 'pages/Test'

Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/test', component: Test },
]

const router = new VueRouter({
  routes,
})

const store = new Vuex.Store({
  modules: {
    users: userStore,
    followers: followersStore,
    followings: followingsStore,
  },
  strict: true,
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})