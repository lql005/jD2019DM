<template>
    <!-- 极速借贷 -->
    <Panel title="极速借贷" :cname="$style.cname">
        <div :class="$style.content">
            <router-link to="">
                <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/25624/24/13705/79789/5ca186d5E24ff66ee/de6d10cab2d6dd6c.jpg?width=1080&height=240" alt="">
            </router-link>
        </div>
    </Panel>
</template>

<script>
import Panel from "../../components/panel.vue";
export default {
    data() {
        return {
            cname:"cname",
        }
    },
    components:{
        Panel,
    }
}
</script>

<style lang="scss" module> 
@import "../../assets/css/element.scss";
.cname {
    @include panel;
    .content {
        @include list;
        align-items: center;
        img {
            width: 100%;
            padding:.4rem 0;
        }
    }

}
</style>
