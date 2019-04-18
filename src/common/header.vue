<template>
    <div :class="$style.header">
        <span :class="$style.left">
            <span>注册</span>
            &nbsp;|&nbsp;
            <span>登录</span>
        </span>
        <btn :cname="$style.downLader">APP下载</btn>
    </div>
</template>

<script>
import btn from "../components/btn.vue";
export default {
    components:{
            btn
    },
    data(){
        return {
            downLader:'downLader'
        }
    },
}
</script>

<style lang="scss" module>
    body {
        background-color: #eee;
    }
    .header{
        height: 1rem;
        line-height: 1rem;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        font-size: .32rem;
        background:#fff url(https://img12.360buyimg.com/jrpmobile/jfs/t1/25624/24/13705/79789/5ca186d5E24ff66ee/de6d10cab2d6dd6c.jpg?width=1080&height=240) center center no-repeat;
        background-size:auto 50%;
        z-index: 9;
        .left{
            font-size: .28rem;
            height: .3rem;
            line-height: .3rem;
            margin: 0.17rem 0 0 0.18rem;
        }
        .downLader {
            float: right;
            font-size: .28rem;
            height: .56rem;
            line-height: .56rem;
            min-width: 1.2rem;
            padding: 4px;
            margin: .28rem .24rem 0 0;
            border-radius: 4px;
        }
    }
</style>

