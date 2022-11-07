<template>
  <div class="v-cart-item">
    <v-popup
        v-if="isInfoPopupVisible"
        CartButtonTitle="Add to cart"
        FavouritButtonTitle="Add to favourite"
        :popupTitle="cart_item_data.name"
        @closePopup="closeInfoPopup"
    >
      <div class="v-catalog-items-popup-image">
        <img class="v-catalog-item-popup__image" :src="cart_item_data.image_url" alt="img">
      </div>
      <div class="v-catalog-item-popup-content">
        <p class="v-catalog-item-popup__name">{{cart_item_data.name}}</p>
        <p class="v-catalog-item-popup__price">Price: {{cart_item_data.price}}</p>
        <p class="v-catalog-item-popup__in-stocks">In stocks: {{cart_item_data.in_stock}}</p>
      </div>
    </v-popup>
    <div class="v-cart-items-image">
      <img class="v-cart-items__image" :src="cart_item_data.image_url" alt="img">
    </div>
    <div class="v-cart-item-info">
      <p class="v-cart-item-name">{{cart_item_data.name}}</p>
      <p class="v-cart-item-price">Price: {{cart_item_data.price}}</p>
      <p class="v-cart-item-in-stocks">In stocks: {{cart_item_data.in_stock}}</p>
      <div class="v-cart-item-quantity">
        <p>Quantity:</p>
        {{cart_item_data.quantity}}
      </div>
      <button @click="deleteFromCart">Delete</button>
      <button class="v-catalog-item__show-info " @click="ShowPopupInfo">Show</button>
    </div>


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
  display: grid;
  grid-template-columns: 4fr 5fr;
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #2c3e50;
  padding: $padding*2;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  margin-bottom: $margin*2;

  .v-cart-items {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #2c3e50;
    padding: $padding*2;
    justify-content: space-between;
    background-color: #ffffff;
    margin-bottom: $margin*2;
    height: 30%;
    &__image{
      max-width: 100%;
    }
  }

}
</style>