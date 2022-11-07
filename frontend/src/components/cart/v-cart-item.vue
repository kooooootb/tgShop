<template>
  <div class="v-cart-item">
    <v-popup
        v-if="isInfoPopupVisible"
        CartButtonTitle="Add to cart"
        FavouritButtonTitle="Add to favourite"
        :popupTitle="cart_item_data.name"
        @closePopup="closeInfoPopup"
    >
      <img class="v-catalog-item-popup__image" :src="cart_item_data.image" alt="img">
      <p class="v-catalog-item-popup__name">{{cart_item_data.name}}</p>
      <p class="v-catalog-item-popup__price">Price: {{cart_item_data.price}}</p>
      <p class="v-catalog-item-popup__in-stocks">In stocks: {{cart_item_data.in_stock}}</p>
    </v-popup>
    <img class="v-cart-item-image" :src="cart_item_data.image" alt="img">
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
    <button class="v-catalog-item__show-info " @click="ShowPopupInfo">Show</button>
  </div>
</template>

<script>
import vPopup from "../popup/v-popup"
export default {
  name: "v-cart-item",
  components: {
    vPopup
  },
  props: {
    cart_item_data: {
      type: Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return{
      isInfoPopupVisible: false
    }
  },
  computed:{},
  methods: {
    deleteFromCart(){
      this.$emit('deleteFromCart')
    },
    ShowPopupInfo(){
      this.isInfoPopupVisible = true;
    },
    closeInfoPopup(){
      this.isInfoPopupVisible = false;
    }
  },
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1)
  }

}
</script>

<style lang="scss">
.v-cart-item{
  background-color: #ffffff;
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