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
    <slot name="title"></slot>
    <div class="topic-status">
     <img class="list-avatar" v-bind:src="post.user.avatar" @click="goUser(post.user.id)"/>
     
     <slot name="name"></slot>
    </div>
    <slot name="context"></slot>
     
     <div class="topic-status">
    
      <slot name="date"></slot>
      <div class="update-group">
          <div class="update-div">
          <img src="../../src/assets/heart.png" id="heart"/><!--
          --><slot name="like"></slot>
          </div>
          <!--element-ui-->
          <el-dropdown :hide-on-click="false" trigger="click">
             <span class="el-dropdown-link">
              <div class="update-div">
                 <img src="../../src/assets/plane.png" id="plane"/><!--
               --><span>分享</span>
              </div>
             </span>
               <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><img src="../../src/assets/link.png"/>复制链接</el-dropdown-item>
                <el-dropdown-item><img src="../../src/assets/webo.png"/>新浪微博</el-dropdown-item>
                <el-dropdown-item><img src="../../src/assets/wechat.png"/>微信扫一扫</el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
            
          <!-- <div class="update-div">
          <img src="../../src/assets/plane.png" id="plane"/>
          <span>分享</span>
          </div> -->

          <div class="update-div">
           <img src="../../src/assets/flag.png" id="flag"/>
            <span>举报</span>
          </div>

           <el-dropdown :hide-on-click="false" trigger="click">
             <span class="el-dropdown-link">
               <img src="../../src/assets/arrow.png" class="list-arrow-btn"/>
             </span>
               <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>屏蔽</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
           
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
