import { createRouter, createWebHistory } from 'vue-router'
import ComponentHome from '../components/Home.vue'
import LoginForm from '../components/Login.vue'
import RegisterForm from '../components/Register.vue'
import ResetForm from '../components/Reset.vue'


const routes = [
  {
    path: '/',
    component: ComponentHome
  },
  {
    path: '/login',
    component: LoginForm
  },
  {
    path: '/signup',
    component: RegisterForm
  },
  {
    path: '/reset',
    component: ResetForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router