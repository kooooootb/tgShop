<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item-image" src="product_data.image" alt="img">
    <p class="v-catalog-item-name">{{product_data.name}}</p>
    <p class="v-catalog-item-price">Price: {{product_data.price}}</p>
    <p class="v-catalog-item-in-stocks">In stocks: {{product_data.in_stock}}</p>

    <button class="v-catalog-item-add-to-cart-btn btn" @click="AddToCart">Bye</button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return{}
  },
  computed:{},
  methods:{
    AddToCart(){
      this.$emit('AddToCart',this.product_data)
    }
  }
}
</script>

<style lang="scss">
  .v-catalog-item{
      flex-basis: 25%;
      box-shadow: 0 0 8px 0 #2c3e50;
      padding: $padding*2;
    margin-bottom: $margin*2;
    &__image{
      max-width: 50px;
    }
  }
</style>
