import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUpForm from '../views/SignUp.vue'
import LoginForm from '../views/Login.vue'
import MenCategory from '../views/MenCategory.vue'
import WomenCategory from '../views/WomenCategory.vue'
import KidCategory from '../views/KidCategory.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpForm
  },
  {
    path: '/mens',
    name: 'mencategory',
    component: MenCategory
  },
  {
    path: '/womens',
    name: 'womencategory',
    component: WomenCategory
  },
  {
    path: '/kids',
    name: 'kidscategory',
    component: KidCategory
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
