<template>
<!--模板中只能包含一个标签-->
    <!--话题+投稿-->
    <article style="height:auto;width:100%;">
      <div class="container">
        <div class="item-div">   
       <!--话题-->

      <div class="topic">
        <span class="topic-title">{{topic.title}}</span>
        <div class="avatar-div">
          <img :src="topic.user.avatar" class="post-avatar" @click="goUser(topic.user.id)"/>
          <span class="post-username">{{topic.user.nickname}}</span>
          <!-- <span style="white-space:pre-line;white-space: pre-line;color: #666;font-size: 16px;">{{topic.createAt}}</span> -->
         <span class="post-date">2018.04.12 11.25</span>
        </div>
        <span class="topic-text">{{topic.text}}</span>
        <div class="oper-div">
          <button class="topic-btn" id="pari">参与话题</button>
          <button class="topic-btn" id="share">分享话题</button>
          <div class="post-oper-div">
             <img src="../../src/assets/post.png" class="post-cribu-img"/><span class="status-text">{{topic.attendCount}}人投稿</span>
             <img src="../../src/assets/flag.png" id="post-flag"/><span class="status-text">举报</span>

             <el-dropdown :hide-on-click="false" trigger="click">
             <span class="status-text el-dropdown-link">
              <img src="../../src/assets/arrow.png" class="post-arrow-btn">
             </span>
               <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>屏蔽</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
            

             <!-- <img src="../../src/assets/arrow.png" class="post-arrow-btn"> -->
             <!-- <el-button type="primary" icon="el-icon-edit"></el-button> -->
          </div>
        </div>
      </div>


    <blockquote v-if="posts.length!==0">
        <blockquote v-for="(item,index) of posts" :key="index">
           <!--组件listing-->
         <listing  style="margin-top:35px;" message="post" v-bind:post="item">
           <span slot="name" class="name">{{item.user.nickname}}</span>
           <span slot="context" class="context">{{item.text}}</span>
           <!-- <span slot="date" class="date">{{item.createAt}}</span> -->
            <span slot="date" class="date">2018.04.12 11.25</span>
           <span slot="like">{{item.likeCount}}</span>
           <!-- <img slot="like" v-bind:src="`${item.user.avatar}`"/> -->
         </listing>
        </blockquote>
    </blockquote>
    <blockquote v-else>
          <div class="nohave-info">
            该话题竟然是空的，感觉投稿抢占沙发吧~
          </div>
    </blockquote>
        </div>
        <!--侧边栏-->
         <sidebar class="post-hide"></sidebar>
      </div>
    </article>
</template>

<script>
import $ from '../../jquery-3.0.0.min.js'

import listing from '../../components/listing/listing.vue'
import sidebar from '../../components/sidebar/sidebar.vue'
import fetch from '../fetch.js'

export default {
  name: 'post',
  data () {
    return {
    arr: [1,2,3,4,5,7,8,9,10],
    topic:null,
    posts:[],
    cursor:0
    }
  },
  //使用组件
  components:{
    listing,
    sidebar
  },
  created(){
    this.init_data();
  },
  methods:{
    init_data(){

        const loading = this.$loading({
          lock: true,
          text: '拼命加载中',
          background: 'rgba(0, 0, 0, 0)'
        });

      const tid=this.$route.params.tid;
      console.log('接受到的tid-------------',tid);
      fetch.get('/v1/post/answer-list',{
          id:tid,
          cursor:this.$data.cursor,
          limit:5
      }).then(res=>{
        console.log('接收到的数据----------------：',res.data);
        this.$data.posts=res.data.posts;
        this.$data.cursor=res.data.cursor;
      });
      fetch.get('/v1/post/detail',{
        id:tid
      }).then(res=>{
        this.$data.topic=res.data.post;
        console.log('接收到的topic数据--------',this.$data.topic);
      })
      setTimeout(() => {
        loading.close()
      }, 500);
    },
    goUser(uId){
        this.$router.push(`/user/${uId}`);
    }
  }
}
  // $(document).ready(function(){
  //     alert('..................');
  //     $('#pari').click(function(){
  //       alert('测试。。。。。。');
  //     })
  //   });
</script>

<style>
@import url('post.css');
</style>
