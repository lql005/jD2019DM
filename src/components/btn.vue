<template>
    <div :class="[btnClass,cname]" @click="handleClick">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"btn",
    props:{
        cname:{
            type:String,
            default:"",
        }
    },
    data(){
        return {
            btnClass:"btn",
        }
    },
    methods:{
        handleClick(){
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss">
@import "../assets/css/element.scss";
.btn {
    @include btn;
    }
</style>


