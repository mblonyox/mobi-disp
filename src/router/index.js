import Vue from 'vue'
import VueRouter from 'vue-router'
import RouteMain from './main'
import RouteAuth from './auth'
import {auth} from '@/services/firebase'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [ RouteMain, RouteAuth ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.mwAuth) && !auth.currentUser) {
    next({ name: 'Login' })
  } else if(to.matched.some(record => record.meta.mwGuest) && !!auth.currentUser) {
    next(false)
  } else {
    next()
  }
})

export default router