<template>
<!--模板中只能包含一个标签-->
<div>
    <!--话题+投稿-->
    <article style="height:auto;width:100%;">
      <div style="height:100%;width:1000px;margin:0 auto;display: flex">
        <div style="height:100%;width:auto;padding-top:10px;">
        <!--组件listing-->
         <listing  v-for="(item,index) of arr" :key="index" message="index">
          <span slot="title"  class="title">游戏和女友之间的战争</span>
          <span slot="context" class="context">女友删除男友游戏账号，男子怒砸电脑后跪地不起，网友称其太矫情，你觉得呢？女友删除男友游戏账号，男子怒砸电脑后跪地不起，网友称其太矫情，你觉得呢？女友删除男友游戏账号，男子怒砸电脑后跪地不起，网友称其太矫情，你觉得呢？女友删除男友游戏账号，男子怒砸电脑后跪地不起，网友称其太矫情，你觉得呢？女友删除男友游戏账号，男子怒砸电脑后跪地不起，网友</span>
          <span slot="name"  class="name">哈哈哈</span>
          <span slot="date" class="date">2019.04.12 11.25</span>
          <span slot="post" class="cribu">99人投稿</span>
        </listing>
        </div>
        <!--侧边栏-->
        <sidebar>
       
        </sidebar>

      </div>
    </article>
   
  </div>
</template>

<script>
import listing from '../components/listing/listing.vue'
import sidebar from '../components/sidebar/sidebar.vue'
import index from './index.js'

export default {
  name: 'index',
  data () {
    return {
      arr: [1,2,3,4,5,7,8,9,10]
    }
  },
  //使用组件
  components:{
    listing,
    sidebar
  }
}
</script>
<style>
@import url('index.css');
</style>
