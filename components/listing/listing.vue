<template>
  <!--首页的listing的样式-->
  <div class="item" v-if="message==='index'">
    <span class="title">游戏和女友之间的战争</span>
    <span class="context">女友删除男友游戏账号，男子怒砸电脑后跪地不起，网友称其太矫情，你觉得呢？</span>
    <div class="status">
      <img class="avatar">
      <span class="name" style="margin-right:25px;">游哈哈</span>
      <span class="date" style="white-space:pre-line;margin-right:40px;">2019.04.12 11.25</span>
      <div style="display:inline-block;height:25px;display:flex;">
          <img src="../../src/assets/post.png" style="width:21px;height:17px;margin-right:10px;margin-top: 5px;"/><!--
          --><span style="margin-top:2px;">99人投稿</span>
      </div>
    </div>
  </div>
  <!--话题详情页的listing的样式-->
  <div class="item" v-else>
    <div class="status">
     <img class="avatar">
     <span class="name" style="margin-right:25px;">游哈哈</span>
    </div>
     <span class="context">女友删除男友游戏账号，男子怒砸电脑后跪地不起，网友称其太矫情，你觉得呢？</span>
     <div class="status">
      <span class="date" style="white-space:pre-line;margin-right:40px;">2019.04.12 11.25</span>
      <div style="display:inline-block;height:25px;display:flex;">
          <div class="update-div">
          <img src="../../src/assets/like.png" style="width:21px;height:17px;margin-right:10px;margin-top: 5px;"/><!--
          --><span style="margin-top:2px;">99</span>
          </div>
          <div class="update-div">
          <img src="../../src/assets/share.png" style="width:21px;height:17px;margin-right:10px;margin-top: 5px;"/><!--
          --><span style="margin-top:2px;">分享</span>
          </div>
          <div class="update-div">
           <img src="../../src/assets/time.png" style="width:21px;height:17px;margin-right:10px;margin-top: 5px;"/><!--
          --><span style="margin-top:2px;">举报</span>
          </div>
           <img src="../../src/assets/arrow.png" style="width:32px;height:7px;margin-right:10px;margin-top: 10px;"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "listing",
  data() {
    return {};
  },
  /*组件的自定义属性 */
  props:['message']
};
</script>

<style>
 @import url(listing.css);
</style>
