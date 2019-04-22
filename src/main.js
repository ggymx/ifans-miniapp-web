import Vue from 'vue'

import $ from 'jquery'

import elementUi from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';

import App from './app.vue'
import router from './router.js'
import store from './vuex.js'

//引入element-ui
Vue.use(elementUi);
//引入jquery
Vue.use($);

new Vue({
  router,
  store,
  el: '#app',
  //引入路由配置
  render: h => h(App)
})
