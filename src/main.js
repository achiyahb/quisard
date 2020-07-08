import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import firebaseInstance from "./middelware/firebase"
import { rtdbPlugin } from 'vuefire'

Vue.use(rtdbPlugin)

Vue.config.productionTip = false


firebaseInstance.firebase.auth().onAuthStateChanged((user) =>{
  window.user = user;
  localStorage.setItem('uid', user.uid);
  new Vue({
    router,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})

