<template>
<!--模板中只能包含一个标签-->
<div>
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
