import Vue from 'vue'
import App from './app.vue'
import router from './router.js'

new Vue({
  router,
  el: '#app',
  //引入路由配置
  render: h => h(App)
})
