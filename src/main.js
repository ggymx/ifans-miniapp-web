import Vue from 'vue'
import App from './app.vue'
import router from './router.js'
import store from './vuex.js'

new Vue({
  router,
  store,
  el: '#app',
  //引入路由配置
  render: h => h(App)
})
