<template>
    <Panle title="新手特权" :cname="$style.cname">
        <div :class="$style.concent">
            <div :class="$style.item">
                <h4>下载APP <span>送888元礼包</span></h4>
                <p>新手专享</p>
                <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/10297/24/14008/46685/5c862b47Eef810b58/30b8c5430103352a.jpg?width=750&height=320" alt="">
            </div>
            <div :class="$style.item">
                <ul>
                    <li>
                        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90" alt="">
                        <h4 :class="$style.nowarp">取128元新手礼包</h4>
                        <span>立即开通</span>                   
                    </li>
                    <li>
                        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90" alt="">
                        <h4>打白条享免息</h4>
                        <span>立即开通享好礼</span>                    
                    </li>
                </ul>
            </div>
        </div>
    </Panle>
</template>

<script>
import Panle from "../../components/panel";
export default {
    data() {
        return {
            cname:'cname',
            text:'新手特权'
        }
    },
    components:{
        Panle
    }
}
</script>

<style lang="scss" module>
@import "../../assets/css/element.scss";
.cname {
    margin: .3rem 0;
}
.concent {
    @include list(row);
    .item {
        span {
            color: gray;
        }
        width: 50%;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
        &:first-child {         
            border-right: 1px solid #ccc;
            padding: .32rem .2rem;
            text-align: center;
            img {
                box-sizing: border-box;        
                width: 100%;
                padding: .1rem .3rem;
            }
            h4 {
                font-size: .3rem;
            }
            span {
                color: red;
            }
        }
        ul {
            width: 100%;
            height: 100%;
            li {
                h4 {
                    width: 70%;
                    font-size: .3rem;
                    color: red;
                    &.nowarp {
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
                &:first-child {
                    border-bottom: 1px solid #ccc;
                }
                box-sizing: border-box;
                padding: .32rem .2rem;
                width: 100%;
                height: 50%;
                img {
                    float:right;
                    width: .8rem;
                    height: .8rem;
                }
            }
        }
    }
}

</style>
