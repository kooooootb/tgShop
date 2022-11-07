<template>
  <div class="v-cart">
    <h1>Cart</h1>
    <p v-if="!cart_data.length">There are no products in cart...</p>
    <div class="v-cart-list">
      <v-cart-item
        v-for="(item, index) in cart_data"
        :key="item.id"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
      />
    </div>
  </div>
</template>

<script>
import VCartItem from './v-cart-item'
import {mapActions} from "vuex";

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
    methods: {
      ...mapActions([
          'DELETE_FROM_CART'
      ]),
      deleteFromCart(index){
        this.DELETE_FROM_CART(index);
      }
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