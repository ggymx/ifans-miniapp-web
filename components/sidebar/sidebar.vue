<template>
    <div style="height:auto;width:auto;margin-left:10px;">
            <div v-if="userInfo" style="margin-top:45px;margin-left:30px;display:flex;align-items: center;">
            　　<img :src="userInfo.avatar" style="width:94px;height:94px;border-radius:50%;background:gray;margin-right:20px;">
                <span style="font-size:18px;">{{userInfo.nickname}}</span>
            </div>
            <div class="wechat-div">
             <img src="../../src/assets/topic-icon.png" style="width:94px,height:94px;margin-left:40px;margin-right:20px;"/>
             <span>扫描二维码，<br/>打开轻话题小程序</span>
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
@import url('sidebar.css');
</style>
