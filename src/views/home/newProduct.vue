<template>
    <Panel title="新手产品">
        <div :class="$style.concent">
            <router-link :to="{path:'home'}" :class="$style.more">显示更多 >></router-link>
            <slider :options="options" :items="items" cname="productSlider"></slider>
        </div>
    </Panel>    
</template>

<script>
import Panel from '../../components/panel';
import Slider from '../../components/silder';
export default {
    data() {
        return {
            options: {
                slidesPerView: 2.3,
                paginationClickable: true,
                spaceBetween: 30,
                freeMode: true
            },
            items: [{
                href: '/home',
                img:'https://img12.360buyimg.com/jrpmobile/jfs/t26893/316/1416172900/5740/58f20b1e/5bc82e3aN7aa90a89.png?width=210&height=260',
            },
            {
                href: '/home',
                img:'https://img12.360buyimg.com/jrpmobile/jfs/t26767/72/1365822552/8516/2e071d95/5bc82e6eN0be93809.png?width=210&height=260',
            },
            {
                href: '/home',
                img:'https://img12.360buyimg.com/jrpmobile/jfs/t27040/190/1395454031/8316/d3d74de2/5bc82eb2N34a7625d.png?width=210&height=260',
            },{
                href: '/home',
                img:'https://img12.360buyimg.com/jrpmobile/jfs/t26182/297/1417522782/7864/19181a3b/5bc82ec0N0824153d.png?width=210&height=260',
            }]
        }
    },
    components:{
        Panel,
        Slider,
    }
}
</script>
<style lang="scss">
.productSlider {
    .swiper-container {
        box-sizing: border-box;
        padding: 0 .24rem .2rem;
        .swiper-slide {
            margin: 0 .2rem 0 0 !important;
            a {
                display: inline-block;
                width: 100%;
                img {
                    width: 100%;
                    height: 3.14rem;
                }
            }
        }
    }
}
</style>

<style lang="scss" module>
.concent {
    position: relative;
    .more {
        position: absolute;
        right: .2rem;
        top:-.65rem;
        font-size:.3rem;
        height: .3rem;
        line-height:.3rem;
        color:#666;
    }
}
</style>

