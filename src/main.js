// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Vuex from 'vuex'
import Apple from './components/apple'
import Banana from './components/banana'
import Grape from './components/grape'
import RedGrape from './components/redgrape'

Vue.use(VRouter)
Vue.use(Vuex)
Vue.config.productionTip = false

let store = new Vuex.Store({
  state: {
    totalPrice: 0
  },
  getters: {
    getTotal (state) {
      return state.totalPrice
    }
  },
  mutations: {
    increment (state, price) {
      state.totalPrice += price
    },
    decrement (state, price) {
      state.totalPrice -= price
    }
  },
  actions: {
    increase (context, price) {
      context.commit('increment', price)
    }
  }
})

let router = new VRouter({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   redirect: '/banana'
    // },
    {
      path: '/apple/:color/detail/:type',
      component: Apple
    },
    {
      path: '/banana',
      name: 'bananaPage',
      component: Banana
    },
    {
      path: '/grape',
      component: Grape,
      children: [
        {
          path: 'red',
          component: RedGrape
        }
      ]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
