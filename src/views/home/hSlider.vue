<template>
    <section class="hSlider">
        <Slider :cname="warpSlider" :items="items"></Slider>
        <div class="list">
            <router-link class="items" :to="items.href" v-for="items in enters" :key="items.img">
                <img :src="items.img" alt="">
                <h4>{{ items.title }}</h4>
            </router-link>
        </div>
    </section>    
</template>

<script>
import Slider from "../../components/silder";
export default {
    data() {
        return {
            warpSlider: "warpSlider",
            items:[
                {
                    href:'/home',
                    img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/10297/24/14008/46685/5c862b47Eef810b58/30b8c5430103352a.jpg?width=750&height=320',
                },
                {
                    href:'/home',
                    img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/19037/8/10380/37518/5c862ba2Ec8e629f7/6c4f8c721cf210d8.jpg?width=750&height=320',
                },
                {
                    href:'/home',
                    img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/28576/40/10399/139307/5c862bc6E022a873e/c50fcefa58db30ce.jpg?width=750&height=320',
                },
            ],
            enters:[
                {
                    href:'/home',
                    img:'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
                    title:"优惠卷"
                },
                {
                    href:'/home',
                    img:'https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
                    title:"领福利"
                },
                {
                    href:'/home',
                    img:'https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
                    title:"抢钢镚"
                },
                {
                    href:'/home',
                    img:'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
                    title:"白条提额"
                },
                {
                    href:'/home',
                    img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90',
                    title:"工资理财"
                },
            ]
        }
    },
    components:{
        Slider
    }
}
</script>

<style lang="scss">
@import '../../assets/css/element.scss';
    .warpSlider{
        margin-top: 1.2rem;
        img {
            width: 100%;
        }
    }
    .list {
        @include list(row);
        justify-content: space-around;
        padding: .2rem 0 .2rem 0;
        margin-bottom: .2rem;
        background-color: #fff;
        .items{
            @include list;
            align-items: center;
            img {
                width: .9rem;
                height: .9rem;
            }
            h4 {
                margin-top: .1rem;
                font-size: .26rem;
                color: black;
            }
        }
    }
</style>
