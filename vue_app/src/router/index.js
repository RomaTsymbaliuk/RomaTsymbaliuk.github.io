import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../views/Home.vue'
import Page from '../views/About.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'app',
    component: App
  },
  {
    path: '/page',
    name: 'page',
    component: Page
  }
]

const router = new VueRouter({
  routes
})

export default router
