import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyProject from '../views/MyProject.vue'
import Education from '../views/Education.vue'
import Team from '../views/Team.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/myproject',
    name: 'MyProject',
    component:MyProject
  },
  {
    path: '/education',
    name: 'Education',
    component:Education
  },
  {
    path: '/team',
    name: 'Team',
    component:Team
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
