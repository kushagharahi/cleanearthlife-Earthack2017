import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  routes: [
  ]
})

router.beforeEach(function (to, from, next) {
  document.title = to.meta.title
  next()
})

const root = new Vue({
  el: '#app',
  router: router,
  render: function(h){
    return h(App)
  },
  replace: false
})