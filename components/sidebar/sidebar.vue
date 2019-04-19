<template>
    <div class="right-div">
            <div v-if="userInfo" class="user-div">
            　　<img :src="userInfo.avatar" class="slide-avatar">
                <span style="font-size:18px;">{{userInfo.nickname}}</span>
            </div>
            <div class="wechat-div">
             <img src="../../src/assets/topic-icon.png"/>
             <span class="tip">扫描二维码，<br/>打开轻话题小程序</span>
            </div>
    </div>
</template>
<script>
export default {
    name:'sidebar',
    data(){
        return{

        }
    },
    components:{

    },
    props:['userInfo']
}
</script>
<style>
@import url(sidebar.css);
</style>
