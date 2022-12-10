import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import MedicalBlogView from '../views/MedicalBlogView.vue'
import ServicesView from '../views/ServicesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Services',
    name: 'Services',
    component:ServicesView
  },
  {
    path: '/MedicalBlog',
    name: 'MedicalBlog',
    component: MedicalBlogView
  },
    {
    path: '/AboutUs',
    name: 'AboutUs',
    component: AboutUsView
  },
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: ContactUsView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
