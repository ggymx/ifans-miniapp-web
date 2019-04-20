import Vue from 'vue'
import App from './app.vue'
import router from './router.js'
import store from './vuex.js'


//在Vue（全局）中引入路由模块
Vue.use(Router)

//在Vue（全局）中引入状态管理模块
Vue.use(Vuex);

new Vue({
  router,
  store,
  el: '#app',
  //引入路由配置
  render: h => h(App)
})
