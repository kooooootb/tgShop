<template>
  <div class="v-cart">
    <h1>Cart</h1>
    <p v-if="!cart_data.length">There are no products in cart...</p>
    <div class="v-cart-list">
      <v-cart-item
        v-for="item in CART"
        :key="item.id"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
      />
    </div>
  </div>
</template>

<script>
import VCartItem from './v-cart-item'
import {mapActions, mapGetters} from "vuex";

let tg = window.Telegram.WebApp;

export default {
    name: "v-cart",
    components:{
      VCartItem
    },
    props:{
      cart_data: {
        type: Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return{}
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART',
        'FAVOURIT',
      ]),
    },
    methods: {
      ...mapActions([
          'DELETE_FROM_CART',
          'GET_PRODUCTS_FROM_API_CART'
      ]),
      deleteFromCart(index){
        this.DELETE_FROM_CART(index);
      }
    },
    mounted() {

      this.GET_PRODUCTS_FROM_API_CART(tg.initDataUnsafe.user.id);//{userid});
      // console.log(window.Telegram.WebApp.initDataUnsafe.user.id);
    }

  }
</script>

<style lang="scss">
.v-cart{
  background-color: #ffffff;
}
.v-cart-link-to-back{
  position: absolute;
  top: 10px;
  right: 10px;
  padding: $padding*2;
  border: solid 1px #aeaeae;
}

</style>