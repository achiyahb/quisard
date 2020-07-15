import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import firebaseInstance from '../middelware/firebase';

Vue.use(VueRouter)



  const routes = [
    { path: '/', name: 'Login',meta:{requiresAuth:false}, component: Login },

    { path: '/Home', name: 'Home',meta:{requiresAuth:true}, component: () => import('../views/Home.vue')},

    // { path: '/Course-Settings', name: 'Settings', component: () => import('../views/Settings.vue') },

    { path: '/courses/:cid/chapters/new-chapter', name: 'NewChapterComp',meta:{requiresAuth:true},
      component: () => import('../components/NewChapter.vue') },

    { path: '/courses/:cid/chapters/:chaid/questions/new-question', name: 'new-question',meta:{requiresAuth:true},
      component: () => import('../components/questions/NewQuestion.vue')},

    { path: '/courses/:cid/chapters/:chaid', name: 'chapter',meta:{requiresAuth:true},
      component: () => import('../views/Chapter.vue') },

    { path: '/courses/:cid/chapters', name: 'Chapters',meta:{requiresAuth:true},
    component: () => import('../components/Chapters.vue')},

    { path: '/courses/new-course', name: 'New-course',meta:{requiresAuth:true}, component: () => import('../components/NewCourse.vue')},

    { path: '/courses/:cid', name: 'course',meta:{requiresAuth:true}, component: () => import('../views/Course.vue') },

    { path: '/Item/:id',meta:{requiresAuth:true}, component: () => import('../views/Item.vue') },

    { path: '/courses/:cid/chapters/:chaid/questions/:qid', name: 'new-question',meta:{requiresAuth:true},
      component: () => import('../views/Question.vue')},
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebaseInstance.firebase.auth().currentUser;
  const requiredAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiredAuth && !currentUser) next ('login');
  else if (!requiredAuth && currentUser) next ('home');
  else next();
});


export default router
