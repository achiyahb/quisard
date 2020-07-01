import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Course-Settings',
      name: 'Settings',
      component: () => import('../views/Settings.vue')
    },
    {
      path: '/courses/:cid/chapters/new-chapter',
      name: 'Questions',
      component: () => import('../components/NewChapterComp.vue')
    },
    {
      path: '/courses/:cid/chapters/:chaid/questions/new-question',
      name: 'new-question',
      component: () => import('../components/questions/InputCom.vue')
    },
    {
      path: '/courses/:cid/chapters/:chaid',
      name: 'chapter',
      component: () => import('../views/Chapter.vue')
    },
  {
    path: '/courses/:cid/chapters',
    name: 'Chapters',
    component: () => import('../views/Chapters.vue')
  },
    {
      path: '/courses/new-course',
      name: 'New-course',
      component: () => import('../components/NewCourseComp.vue')
    },
    {
      path: '/courses/:cid',
      name: 'course',
      component: () => import('../views/Course.vue')
    },
    { path: '/Item/:id', component: () => import('../views/Item.vue') }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
