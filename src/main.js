import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
// import axios from 'axios'
import './plugins/rem'



Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

// 路由判斷登入 根據路由配置檔案的引數
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isLogin)){ // 判斷該路由是否需要登入許可權
    console.log('需要登入');
    // const canLogin = axios.get('http://localhost:8080/api/register').then(response => (this.register = response.data))
    if (localStorage.token) {
      next();
    }else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 將跳轉的路由path作為引數，登入成功後跳轉到該路由
      })
    }
  }else {
    next();
  }
});