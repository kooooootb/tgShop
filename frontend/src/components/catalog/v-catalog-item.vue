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
      <div class="v-catalog-items-popup-image">
        <img class="v-catalog-item-popup__image" :src="product_data.image_url" alt="img">
      </div>
      <div class="v-catalog-item-popup-content">
        <p class="v-catalog-item-popup__name">{{product_data.name}}</p>
        <p class="v-catalog-item-popup__price">Price: {{product_data.price}}</p>
        <p class="v-catalog-item-popup__in-stocks">In stocks: {{product_data.in_stock}}</p>
      </div>
    </v-popup>
    <div class="v-catalog-items-image">
      <img class="v-catalog-items__image" :src="product_data.image_url" alt="img">
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
let tg = window.Telegram.WebApp;

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
      this.$emit('AddToFavourit',this.product_data, tg.initDataUnsafe.user.id)
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
    display: grid;
    grid-template-columns: 4fr 5fr;
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #2c3e50;
    padding: $padding*2;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff;
    margin-bottom: $margin*2;

  }
  .v-catalog-items{
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
  .v-catalog-item-popup{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #2c3e50;
    padding: $padding*2;
    margin-bottom: $margin*2;

    &__image{
      max-width: 100%;
    }
    &__name{
      justify-content: center;
    }
  }
</style>