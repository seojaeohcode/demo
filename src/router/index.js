import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import newPage from '../views/newPage.vue' 
import rustMart from '../views/rustMart.vue' 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HomeView
  },
  {
    path: '/newPage',
    name: 'newPage',
    component: newPage,
  },
  {
    path: '/rustMart',
    name: 'rustMart',
    component: ()=> import(/*webpackPrefetch:true*/ '../views/rustMart.vue'),
  },
  {
    path: '/uservue',
    name: 'uservue',
    component: ()=> import(/*webpackPrefetch:true*/ '../components/userVue/User.vue'),
  },
  {
    path: '/ex',
    name: 'uservueEx',
    component: ()=> import(/*webpackPrefetch:true*/ '../components/userVueEx/User.vue'),
  },
  {
    path: '/newPage2',
    name: 'newPage2',
    component: ()=> import(/*webpackPrefetch:true*/ '../views/newPageView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
