<template>
  <div class="home">
    <Heador></Heador>
    <h-slider></h-slider>
    <h-novice></h-novice>
    <h-borrow></h-borrow>
    <h-money></h-money>
    <h-product></h-product>
    <!-- <btn :cname="btns" @click='handleClick'>{{ count }}</btn>
    <btns :btnName="btnss" @click="handleClick">{{ num }}</btns>
    <div>{{ city }}</div>
    <div>{{ filterArr[0] }}</div> -->
  </div>
</template>

<script>
import Heador from "../../common/header";
import hSlider from "./hSlider";
import hNovice from "./novice";
import hBorrow from "./borrow";
import hMoney from "./money";
import hProduct from "./newProduct";
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
  name: "home",
  components:{
    Heador,
    hSlider,
    hNovice,
    hBorrow,
    hMoney,
    hProduct,
  },
  data() {
    return {
      Num:2,
      btns:'qwe',
    }
  },
  computed:{
    num(){
     return this.count*2
    },
    ...mapState({
    count:'count',
    city:'city',
    }),
    ...mapGetters({
      filterArr:'filterArr'
    })
 },
 methods:{
   ...mapActions(['changeCount','changeCity']),
   handleClick(){
     console.log(this.filterArr);
     this.changeCount(this.num);
     this.changeCity('深圳');
   },
 }
};
</script>

<style lang="scss">
.home {
  background-color: #eee;
}
.qwe{
  background-color: red;
  width: 7.5rem;
}
.btnss{
  font-size: 1rem;
  width: 5rem;
  background-color: yellow
}
</style>

