<template>
  <div class="v-cart-item">
    <img class="v-cart-item-image" src="cart_item_data.image" alt="img">
    <div class="v-cart-item-info">
      <p class="v-cart-item-name">{{cart_item_data.name}}</p>
      <p class="v-cart-item-price">Price: {{cart_item_data.price}}</p>
      <p class="v-cart-item-in-stocks">In stocks: {{cart_item_data.in_stock}}</p>
    </div>
    <div class="v-cart-item-quantity">
      <p>Quantity:</p>
      {{cart_item_data.quantity}}
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
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
  methods: {
    deleteFromCart(){
      this.$emit('deleteFromCart')
    }
  },
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1)
  }

}
</script>

<style lang="scss">
.v-cart-item{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #2c3e50;
  padding: $padding*2;
  margin-bottom: $margin*2;
  &__image{
    max-width: 50px;
  }

}
</style>
