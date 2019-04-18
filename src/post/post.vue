<template>
<!--模板中只能包含一个标签-->
<div>
    <!--话题+投稿-->
    <article style="height:auto;width:100%;">
      <div style="height:100%;width:1000px;margin:0 auto;display: flex">
        <div style="height:100%;width:auto;padding-top:10px;">   
        <!--组件listing-->
         <listing  v-for="(item,index) of arr" :key="index" style="margin-top:35px;" message="post">
           <span slot="name" class="name">游哈哈</span>
           <span slot="context" class="context">女友删除男友游戏账号，男子怒砸电脑后跪地不起，网友称其太矫情</span>
           <span slot="date" class="date">2019.04.12 11.96</span>
           <span slot="like" style="margin-top:2px;">109</span>
         </listing>
        </div>
        <!--侧边栏-->
         <sidebar></sidebar>
      </div>
    </article>
   
  </div>
</template>

<script>
import listing from '../../components/listing/listing.vue'
import sidebar from '../../components/sidebar/sidebar.vue'
export default {
  name: 'post',
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
@import url('post.css');
</style>
