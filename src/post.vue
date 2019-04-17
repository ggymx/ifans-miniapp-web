<template>
<!--模板中只能包含一个标签-->
<div>

    <span>话题和投稿页面</span>
   
</div>
</template>

<script>
import listing from '../components/listing/listing.vue'
export default {
  name: 'post',
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
@import url('post.css');
</style>
