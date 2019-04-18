<template>
    <section :class="[panel,cname]">
        <h4>-{{ title }}-</h4>
        <slot></slot>
    </section>
</template>

<script>
export default {
    data() {
        return {
            panel:'panel',
        }
    },
    props:{
        cname:{
            type:String,
            default: '',
        },
        title:{
            type:String,
            default:'',
        }
    }
}
</script>

<style lang="scss">
@import "../assets/css/element.scss";
    .panel{
        @include panel;
    }
</style>


