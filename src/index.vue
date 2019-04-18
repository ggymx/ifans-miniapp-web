<template>
<!--模板中只能包含一个标签-->
<div>
    <!--话题+投稿-->
    <article style="height:100%;width:100%;">
      <div style="height:100%;width:1000px;margin:0 auto;display: flex">
        <div style="height:100%;width:666px;padding-top:10px;">
        <!--组件listing-->
        <blockquote v-for="(item,index) of posts" :key="index">
         <listing message="index" v-bind:post="item" v-if="item.type===1">
          <span slot="title"  class="title">
            <!--传递话题id-->
            <router-link v-bind:to="`/post/${item.id}`" class="not-a">{{item.title}}</router-link>
          </span>
          <span slot="context" class="context" v-if="item.text.trim().length!==0">{{item.text}}</span>
          <span slot="name"  class="name">{{item.user.nickname}}</span>
          <span slot="date" class="date">{{item.createAt}}</span>
          <span slot="post" class="cribu">{{item.likeCount}}人投稿</span>
        </listing>
      </blockquote>

         <button class="more-btn" @click="more_data">加载更多</button>
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
import fetch from './fetch.js'

export default {
  name: 'index',
  data () {
    return {
      posts:[],
      receive:{},
      cursor:0
    }
  },
  //使用组件
  components:{
    listing,
    sidebar
  },
  //组件初始化时执行
  created(){
    console.log('this--------------------',this);
    this.init_data();
  },
  //方法区
  methods:{
    init_data(){
      fetch.get('/v1/post/home-list',
      {
        cursor: this.$data.cursor,
        limit: 10
       }
      ).then(res=>{
        this.$data.posts=res.data.posts;
        this.$data.cursor=res.data.cursor;
        // console.log('receive=======',this.$data.posts);
        }
      );
    },
    more_data(){
      console.log('点击进入详情');
        fetch.get('/v1/post/home-list',
      {
        cursor: this.$data.cursor,
        limit: 10
       }
      ).then(res=>{
        this.$data.posts=this.$data.posts.concat(res.data.posts);
        this.$data.cursor=res.data.cursor;
        console.log('-----------------------cursor:',this.$data.cursor);
        }
      );
    }
    
  }
}

</script>
<style>
@import url('index.css');
</style>
