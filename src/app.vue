<template>
<!--模板中只能包含一个标签-->
<div style="width:100%">
 <header>
      <div>
          <ul class="naviList">
              <li style="margin-right:70px;">
                <button class="logo-btn" @click="goHome">
                  <div><img src="./assets/topic.png"/></div>轻话题
                  </button>
              </li>
              <li style="margin-right:81px">
                  <router-link to="/index" class="app-not-a">热门话题</router-link>
                </li>
              <li style="margin-right:81px">
                  <router-link to="/dailyhot" class="app-not-a">每日热点</router-link>
                </li>
              <li>
                  <router-link to="/user" class="app-not-a">我的首页</router-link>
             </li>
            </ul>
             <button class="logo-btn isHide" @click="goHome">
                  <div><img src="./assets/topic.png"/></div>轻话题
            </button><!--
            --><button class="login-btn">登录</button> 
             
      </div>
          <ul class="naviList-iphone">
            <li style="margin-right:78px;margin-left:15px">
              <router-link to="/index" class="app-not-a">热门话题</router-link>
            </li>
            <li style="margin-right:78px">
                <router-link to="/dailyhot" class="app-not-a">每日热点</router-link>
            </li>
            <li style="margin-right:10px;">
               <router-link to="/user" class="app-not-a">我的首页</router-link>
            </li>
          </ul>
         
    </header>
   <!--路由匹配的组件渲染-->
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  methods:{
      goHome(){
        this.$router.push('/')
      }
  },
  //使用组件
  components:{
 
  }
}
</script>

<style>
/* @import url('../bootstrap/css/bootstrap.min.css'); */
@import url('app.css');
</style>
