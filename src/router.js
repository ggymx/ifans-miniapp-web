//vue-router
// 引用依赖包
import Router from 'vue-router'

//引入组件
import post from './post/post.vue'
import dailyhot from './post/dailyhot.vue'
import detail from './user/detail.vue'
import index from './index.vue'

export default new Router({
    //配置路由
    routes:[
        {
            path:'/post/:tid',
            component:post
        },
        {
            path:'/dailyhot',
            component:dailyhot
        },
        {
            path:'/user/:uId',
            component:detail
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