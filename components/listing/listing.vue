<template>
  <!--话题的listing的样式-->
  <div class="item" v-if="message==='topic'">
    <!--标题-->
    <slot name="title"></slot>
    <!--内容-->
    <slot name="context" ></slot>
    <div class="topic-status">
      <img class="list-avatar" v-bind:src="post.user.avatar" @click="goUser(post.user.id)"/>
      <!--姓名-->
      <slot name="name"></slot>
      <slot name="date"></slot>
      <div class="cribu-div">
          <img src="../../src/assets/post.png" class="cribu-img"/><!--
          --><slot name="post"></slot>
      </div>
    </div>
  </div>
  <!--投稿的listing的样式-->
  <div class="item" v-else>
    <div class="topic-status">
     <img class="list-avatar" v-bind:src="post.user.avatar" @click="goUser(post.user.id)"/>
     
     <slot name="name"></slot>
    </div>
    <slot name="context"></slot>
     
     <div class="topic-status">
    
      <slot name="date"></slot>
      <div class="update-group">
          <div class="update-div">
          <img src="../../src/assets/like.png" class="cribu-img"/><!--
          --><slot name="like"></slot>
          </div>
          <div class="update-div">
          <img src="../../src/assets/share.png" class="cribu-img"/><!--
          --><span>分享</span>
          </div>
          <div class="update-div">
           <img src="../../src/assets/time.png" class="cribu-img"/><!--
          --><span>举报</span>
          </div>
           <img src="../../src/assets/arrow.png" class="list-arrow-btn"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "listing",
  data() {
    return {
      
    };
  },
  methods:{
    goUser(uId){
      console.log('跳转----------------------------');
      this.$router.push(`/user/${uId}`)
    }
  },
  /*组件的自定义属性 */
  props:['message','post']
};
</script>

<style>
 @import url('listing.css');
</style>
