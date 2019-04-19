<template>
<!--模板中只能包含一个标签-->
    <!--话题+投稿-->
    <article style="height:auto;width:100%;">
      <div class="container">
        <div class="item-div">   
       <!--话题-->
      <div class="topic">
        <span class="topic-title">{{topic.title}}</span>
        <div style="display: flex;align-items: center;">
          <img :src="topic.user.avatar" class="post-avatar" @click="goUser(topic.user.id)"/>
          <span style="margin-right: 20px;font-size: 18px;color: #666;">{{topic.user.nickname}}</span>
          <span style="white-space:pre-line;white-space: pre-line;color: #666;font-size: 16px;">{{topic.createAt}}</span>
        </div>
        <span style="margin-top: 35px;font-size: 18px;color: #666;">{{topic.text}}</span>
        <div style="margin-top: 30px;font-size: 16px;color: #8590a6;margin-bottom: 30px">
          <button class="topic-btn">参与话题</button>
          <button class="topic-btn">分享话题</button>
          <div style="display:inline-block;margin-left:5px;">
             <img src="../../src/assets/time.png" class="cribu-img"/><span style="margin-right: 30px;">{{topic.attendCount}}人投稿</span>
             <img src="../../src/assets/time.png" class="cribu-img"/><span style="margin-right: 30px;">举报</span>
             <img src="../../src/assets/arrows.png" style="width:22px;height:5px;">
          </div>
        </div>
      </div>
    <blockquote v-if="posts.length!==0">
        <blockquote v-for="(item,index) of posts" :key="index">
           <!--组件listing-->
         <listing  style="margin-top:35px;" message="post" v-bind:post="item">
           <span slot="name" class="name">{{item.user.nickname}}</span>
           <span slot="context" class="context">{{item.text}}</span>
           <span slot="date" class="date">{{item.createAt}}</span>
           <span slot="like" style="margin-top:2px;">{{item.likeCount}}</span>
           <!-- <img slot="like" v-bind:src="`${item.user.avatar}`"/> -->
         </listing>
        </blockquote>
    </blockquote>
    <blockquote v-else>
          <div style="width:646px;height:600px;margin-left:20px">
            该话题竟然是空的，感觉投稿抢占沙发吧~
          </div>
    </blockquote>
        </div>
        <!--侧边栏-->
         <sidebar></sidebar>
      </div>
    </article>
</template>

<script>
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
    },
    goUser(uId){
        this.$router.push(`/user/${uId}`);
    }
  }
}
</script>

<style>
@import url('post.css');
</style>
