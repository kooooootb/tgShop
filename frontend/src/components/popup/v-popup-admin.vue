<template>
  <div class="v-popup-wrapper" >
    <div class="v-popup" ref="popup_wrapper">
      <div class="v-popup__header">
        <span>Add Products</span>
      </div>
      <div class="v-popup__content">
        <a>some things</a>
      </div>
      <div class="v-popup__footer">
        <button class="v-popup__close" @click="closePopup">Close</button>
        <button class="v-popup-add-to-cart-btn" @click="AddToCartPopup">{{CartButtonTitle}}</button>
        <button class="v-popup-add-to-favourit-btn" @click="AddToFavouritPopup">{{FavouritButtonTitle}}</button>

        <!--      <button class="v-popup-add-to-favourit-btn btn">like</button>-->
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "v-popup",
  props:{
    popupTitle:{
      type: String,
      default: 'Popup name'
    },
    CartButtonTitle:{
      type: String,
      default: 'Ok'
    },
    FavouritButtonTitle:{
      type: String,
      default: 'Ok'
    },

  },
  data(){
    return {}
  },
  methods: {
    closePopup(){
      this.$emit('closePopup')
    },
    AddToCartPopup(){
      this.$emit('AddToCartPopup',this.product_data)
    },
    AddToFavouritPopup(){
      this.$emit('AddToFavouritPopup',this.product_data)
    }

  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function (item){
      if(item.target === vm.$refs['popup_wrapper']){
        vm.closePopup()
      }
    })
  }
}
</script>

<style lang="scss">
.v-popup-wrapper{
  background-color: rgba(231, 231, 231, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
}
.v-popup{

  position: fixed;
  justify-content: center;
  align-items: center;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 82%;
  background-color: #ffffff;

  &__header {
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    background: #02061a;
    padding: 8px;

  }
  &__footer{
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    background: #02061a;
    top: 10px;
  }
  &__content{
    display: grid;
    grid-template-columns: 4fr 5fr;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &__close{
    bottom: 0;
    padding: 8px;
    color: #ffffff;
    background: #02061a;
    margin: $margin*2;
    padding: 8px;
  }
  .v-popup-add-to-cart-btn{
    margin: $margin*2;
    padding: 8px;
    color: #ffffff;
    background: #02061a;
  }
  .v-popup-add-to-favourit-btn{
    padding: 8px;
    margin: $margin*2;
    color: #ffffff;
    background: #02061a;
  }


}


</style>