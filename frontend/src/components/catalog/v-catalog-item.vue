<template>
  <div class="v-catalog-item">
    <v-popup
      v-if="isInfoPopupVisible"
      CartButtonTitle="Add to cart"
      FavouritButtonTitle="Add to favourite"
      :popupTitle="product_data.name"
      @closePopup="closeInfoPopup"
      @AddToCartPopup="AddToCart"
      @AddToFavouritPopup="AddToFavourit"
    >
      <img class="v-catalog-item-popup__image" :src="product_data.image" alt="img">
      <p class="v-catalog-item-popup__name">{{product_data.name}}</p>
      <p class="v-catalog-item-popup__price">Price: {{product_data.price}}</p>
      <p class="v-catalog-item-popup__in-stocks">In stocks: {{product_data.in_stock}}</p>
    </v-popup>
    <div class="v-catalog-items-image">
      <img class="v-catalog-item-image" :src="product_data.image" alt="img">
    </div>
    <div class="v-catalog-items-item">
      <p class="v-catalog-item-name">{{product_data.name}}</p>
      <p class="v-catalog-item-price">Price: {{product_data.price}}</p>
      <p class="v-catalog-item-in-stocks">In stocks: {{product_data.in_stock}}</p>
      <button class="v-catalog-item-add-to-cart-btn btn" @click="AddToCart">Buy</button>
      <button class="v-catalog-item-add-to-favourit-btn btn" @click="AddToFavourit">like</button>
      <button class="v-catalog-item__show-info " @click="ShowPopupInfo">Show</button>
    </div>





  </div>
</template>

<script>
import vPopup from "../popup/v-popup"

export default {
  name: "v-catalog-item",
  components: {
    vPopup
  },
  props: {
    product_data: {
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
  computed:{
  },
  methods:{
    AddToCart(){
      this.$emit('AddToCart',this.product_data)
    },
    AddToFavourit(){
      this.$emit('AddToFavourit',this.product_data)
    },
    ShowPopupInfo(){
      this.isInfoPopupVisible = true;
    },
    closeInfoPopup(){
      this.isInfoPopupVisible = false;
    }
  }
}
</script>

<style lang="scss">
  .v-catalog-item{
      flex-basis: 25%;
      box-shadow: 0 0 8px 0 #2c3e50;
      padding: $padding*2;
      justify-content: space-between;
    background-color: #ffffff;
    margin-bottom: $margin*2;
    &__image{
      max-width: 50px;
    }

  }
  .v-catalog-item-popup{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #2c3e50;
    padding: $padding*2;
    margin-bottom: $margin*2;

    &__img{
      max-width: 50px;
    }
    &__name{
      justify-content: center;
    }
  }
</style>