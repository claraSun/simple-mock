import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/* vue-router 版本更新bug */
const originalReplace = Router.prototype.replace
const originalPush = Router.prototype.push
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  mode: 'hash',
  routes: [
    {
      // 避免使用者亂打網址
      path: '*',
      redirect: '/'
    },
    { 
      path: '/', 
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    { 
      path: '/game', 
      name: 'game',
      component: () => import('@/views/Game.vue'),
    },
    { 
      path: '/account', 
      name: 'account',
      component: () => import('@/views/Account.vue'),
    },
    { 
      path: '/event', 
      name: 'event',
      component: () => import('@/views/Event.vue'),
    },
    { 
      path: '/login', 
      name: 'login',
      component: () => import('@/views/Login.vue'),
    },
    { 
      path: '/register', 
      name: 'register',
      component: () => import('@/views/Register.vue'),
    },
    { 
      path: '/my', 
      name: 'my',
      component: () => import('@/views/My.vue'),
      meta: {
        isLogin: true,
      },
    },
  ]
})

export default router