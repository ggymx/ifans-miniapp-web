<template>
    <!--话题+投稿-->
    <article class="floor">
      <div class="container">
        <div class="item-div">

        <div class="top-user-div">
          <img :src="receive.user.avatar">
          <span>{{receive.user.nickname}}</span>
        </div>

        <!--话题listing-->
        <blockquote v-for="(item,index) of receive.posts" :key="index">
         <listing message="topic" v-bind:post="item" v-if="item.type===1">
          <span slot="title"  class="title">
            <!--传递话题id-->
            <router-link v-bind:to="`/post/${item.id}`" class="not-a">{{item.title}}</router-link>
          </span>
          <span slot="context" class="context" v-if="item.text.trim().length!==0">{{item.text}}</span>
          <span slot="name"  class="name">{{item.user.nickname}}</span>
          <!-- <span slot="date" class="date">{{item.createAt}}</span> -->
           <span slot="date" class="date">2018.04.12 11.25</span>
          <span slot="post" class="cribu">{{item.likeCount}}人投稿</span>
        </listing>
        <!--投稿listing-->
         <listing message="post" v-bind:post="item" v-else-if="item.type===2">
           <span slot="name" class="name">{{item.user.nickname}}</span>
           <span slot="context" class="context">{{item.text}}</span>
           <!-- <span slot="date" class="date">{{item.createAt}}</span> -->
             <span slot="date" class="date">2018.04.12 11.25</span>
           <span slot="like" style="margin-top:2px;">{{item.likeCount}}</span>
           <!-- <img slot="like" v-bind:src="`${item.user.avatar}`"/> -->
         </listing>


      </blockquote>

         <button class="more-btn">加载更多</button>
        </div>
        <!--侧边栏-->
        <sidebar v-bind:userInfo="receive.user" class="user-hide">
       
        </sidebar>

      </div>
    </article>
   
</template>

<script>
import listing from '../../components/listing/listing.vue'
import sidebar from '../../components/sidebar/sidebar.vue'
import fetch from '../fetch.js'
export default {
    name:'detail',
    data(){
        return{
            receive:null
        }
    },  
    components:{
        listing,
        sidebar
    },
    created(){
        this.init_data();
    },
    methods:{
        init_data(){
            const userId=this.$route.params.uId
            fetch.get('/v1/user/detail',{
                id: userId
            }).then(res=>{
                this.$data.receive=res.data;
                console.log('接收到的user-------------',this.$data.receive);
            });
        }
    }
}
</script>

<style>
@import url('detail.css');
</style>
