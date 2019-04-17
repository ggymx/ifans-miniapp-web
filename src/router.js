//vue-router
// 引用依赖包
import Vue from 'vue'
import Router from 'vue-router'

//引入组件
import post from './post.vue'
import index from './index.vue'

//在Vue中引入路由模块
Vue.use(Router)
export default new Router({
    //配置路由
    routes:[
        {
            path:'/post',
            component:post
        },
        {
            path:'/index',
            component:index
        },
        {
            //默认路由
            path:'/',
            redirect:'/index'
        }
    ]
});