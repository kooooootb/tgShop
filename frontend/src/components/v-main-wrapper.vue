<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view>
      </router-view>
    </keep-alive>
    <div class="v-main-wrapper__tabbar">
      <div class="tab active purple">
        <router-link :to="{name: 'catalog'}">
          <p class="v-main-wrapper__home">Home</p>
        </router-link>

      </div>
      <div class="tab pink">
        <!--        <i class="far fa-heart"></i>-->
        <p>Likes</p>
      </div>
      <div class="tab yellow">
        <!--        <i class="fas fa-search"></i>-->
        <router-link :to="{name: 'cart', params: {cart_data: CART}}">
          <p class="v-main-wrapper__cart">Cart</p>
        </router-link>
      </div>
    </div>
  </div>


</template>

<script>

 // import VCatalog from "@/components/v-catalog";
 // import VCart from "@/components/v-cart";
import {mapGetters} from "vuex";


export default {
    name: "v-main-wrapper",
    // components: {VCart, VCatalog},
    props:{},
    data(){
      return{
        title: 'Main wrapper'
      }
    },
    computed: {
      ...mapGetters([
        'CART'
      ])
    },
    methods: {}, //clicks, i tp
    watch: {},
    mounted() {
      console.log('hello, im a live')
    }
  }
</script>

<style lang="scss">
  .v-main-wrapper{
    max-width: 900px;
    margin: 0 auto;
    &__tabbar{
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: $padding*3;
      justify-content: space-between;
      display: flex;
      background-color: #ffffff;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.16);
    }
    &__home{
      padding: $padding*2;
      border: solid 1px #aeaeae;
    }
    &__cart{
      padding: $padding*2;
      border: solid 1px #aeaeae;
    }

  }



</style>