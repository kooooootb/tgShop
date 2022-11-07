<template>
  <div class="v-favourit-item">
    <v-popup
        v-if="isInfoPopupVisible"
        CartButtonTitle="Add to cart"
        FavouritButtonTitle="Add to favourite"
        :popupTitle="favourit_item_data.name"
        @closePopup="closeInfoPopup"
    >
      <div class="v-catalog-items-popup-image">
        <img class="v-catalog-item-popup__image" :src="favourit_item_data.image_url" alt="img">
      </div>
      <div class="v-catalog-item-popup-content">
        <p class="v-catalog-item-popup__name">{{favourit_item_data.name}}</p>
        <p class="v-catalog-item-popup__price">Price: {{favourit_item_data.price}}</p>
        <p class="v-catalog-item-popup__in-stocks">In stocks: {{favourit_item_data.in_stock}}</p>
      </div>
    </v-popup>
    <div class="v-favourit-items-image">
      <img class="v-favourit-items__image" :src="favourit_item_data.image_url" alt="img">
    </div>
    <div class="v-favourit-item-info">
      <p class="v-favourit-item-name">{{favourit_item_data.name}}</p>
      <p class="v-favourit-item-price">Price: {{favourit_item_data.price}}</p>
      <p class="v-favourit-item-in-stocks">In stocks: {{favourit_item_data.in_stock}}</p>
      <button @click="deleteFromFavourit">Delete</button>
      <button class="v-catalog-item__show-info " @click="ShowPopupInfo">Show</button>
    </div>


  </div>
</template>

<script>
import vPopup from "../popup/v-popup"
export default {
  name: "v-favourit-item",
  components:{
    vPopup
  },
  props: {
    favourit_item_data: {
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
    deleteFromFavourit(){
      this.$emit('deleteFromFavourit')
    },
    ShowPopupInfo(){
      this.isInfoPopupVisible = true;
    },
    closeInfoPopup(){
      this.isInfoPopupVisible = false;
    }
  },
  mounted() {}

}
</script>

<style lang="scss">
.v-favourit-item{
  display: grid;
  grid-template-columns: 4fr 5fr;
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #2c3e50;
  padding: $padding*2;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  margin-bottom: $margin*2;

  .v-favourit-items {
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