<template>
<!--模板中只能包含一个标签-->
<div>
 <header>
      <div>
          <ul class="naviList">
              <li style="margin-right:70px;">
                <button class="logo-btn">
                  <div><img src="./assets/topic.png"/></div>轻话题
                  </button>
              </li>
              <li style="margin-right:90px"><a href="#" style="color:#666;text-decoration:none">热门话题</a></li>
              <li style="margin-right:90px"><a href="#" style="color:#666;text-decoration:none">每日热点</a></li>
              <li><a href="#" style="color:#666;text-decoration:none">我的首页</a></li>
            </ul>
            <button class="login-btn">登录</button>
      </div> 
    </header>
    <!--话题+投稿-->
    <article style="height:auto;width:100%;">
      <div style="height:100%;width:1000px;margin:0 auto;display: flex">
        <div style="height:100%;width:auto;padding-top:10px;">
        <!--组件listing-->
         <listing  v-for="(item,index) of arr" :key="index" style="margin-top:35px;"></listing>
        </div><!--
        --><div style="height:auto;width:auto;margin-left:10px;">
            <div class="wechat-div">
             <img src="./assets/topic-icon.png" style="width:94px,height:94px;margin-left:40px;margin-right:20px;"/>
             <span>扫描二维码，<br/>打开轻话题小程序</span>
            </div>
         </div>
      </div>
    </article>
   
  </div>
</template>

<script>
import listing from '../components/listing/listing.vue'
export default {
  name: 'index',
  data () {
    return {
      arr: [1,2,3,4,5,7,8,9,10]
    }
  },
  //使用组件
  components:{
    listing
  }
}
</script>

<style>
@import url('index.css');
</style>
