import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";

Vue.use(VueRouter)

  const routes = [
    { path: '/', name: 'Login', component: Login },

    { path: '/Home', name: 'Home', component: () => import('../views/Home.vue')},

    // { path: '/Course-Settings', name: 'Settings', component: () => import('../views/Settings.vue') },

    { path: '/courses/:cid/chapters/new-chapter', name: 'NewChapterComp',
      component: () => import('../components/NewChapter.vue') },

    { path: '/courses/:cid/chapters/:chaid/questions/new-question', name: 'new-question',
      component: () => import('../components/questions/NewQuestion.vue')},

    { path: '/courses/:cid/chapters/:chaid', name: 'chapter',
      component: () => import('../views/Chapter.vue') },

    { path: '/courses/:cid/chapters', name: 'Chapters',
    component: () => import('../components/Chapters.vue')},

    { path: '/courses/new-course', name: 'New-course', component: () => import('../components/NewCourse.vue')},

    { path: '/courses/:cid', name: 'course', component: () => import('../views/Course.vue') },

    { path: '/Item/:id', component: () => import('../views/Item.vue') },

    { path: '/courses/:cid/chapters/:chaid/questions/:qid', name: 'new-question',
      component: () => import('../views/Question.vue')},
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
