import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/home'
import pageNotFound from '@/components/views/pagenotfound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: '404',
      component: pageNotFound
    }
  ],
  mode: 'history'
})
