import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about-us',
    name: 'about',
    component: About,
  },
  {
    path: 'about',
    redirect: {
      name: 'about',
    },
  },
]

const router = new VueRouter({
  routes,
})

export default router