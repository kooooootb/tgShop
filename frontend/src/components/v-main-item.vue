<template>
  <div class="v-main-item">
    <img class="v-main-item-image" src="" alt="img">
    <p class="v-main-item-name">{{product_data.name}}</p>
    <p class="v-main-item-price">Price: {{product_data.price}}</p>
    <p class="v-main-item-in-stocks">In stocks: {{product_data.in_stock}}</p>

<!--    <button class="v-main-item-add-to-cart-btn btn" @click="AddToCart">Buy</button>-->
<!--    <button class="v-main-item-add-to-favourit-btn btn" @click="AddToFavourit">like</button>-->
    <div class="v-main-item__back">
      <p>Back</p>
    </div>
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "v-main-item",
  props:{},
  computed: {
    ...mapGetters([
      'PRODUCT',
      'CART',
      'FAVOURIT'
    ]),
  },
  methods:{
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART',
      'ADD_TO_FAVOURIT'

    ]),
    AddToCart(){
      this.$emit('ADD_TO_CART',this.product_data)
    },
    AddToFavourit(){
      this.$emit('ADD_TO_FAVOURIT',this.product_data)
    }
  }
}
</script>

<style lang="scss">
.v-main-item{
  max-width: 900px;
  &__back{
    bottom: 0;
    height: 10%;
    padding: $padding*3;
    justify-content: center;
    display: flex;
    background-color: #ffffff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.16);
  }
}

</style>