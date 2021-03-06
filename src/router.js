import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/views/Home').default
    },
    {
      path: '/settings',
      name: 'settings',
      component: require('@/views/Settings').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
