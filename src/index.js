import Vue from 'vue'
import Vuex from 'vuex'

import App from './App'
import {
  userStore,
  followersStore,
  followingsStore,
} from 'pages/Home/store'

Vue.use(Vuex)

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
  render: h => h(App),
})