<template>
  <div class="v-main-wrapper" @onclick="ShowButtonAdmin" >
<!--    <v-popup-admin-->
<!--        v-if="isInfoPopupVisible"-->
<!--        CartButtonTitle="Add to cart"-->
<!--        FavouritButtonTitle="Add to favourite"-->
<!--        :popupTitle="cart_item_data.name"-->
<!--        @closePopup="closeInfoPopup"-->
<!--    >-->
<!--      <a>it's popup</a>-->
<!--    </v-popup-admin>-->

        <keep-alive>
          <router-view>
          </router-view>
        </keep-alive>
<!--    <v-main-menu/>-->
    <div class="v-main-wrapper__helper">
      <p>. . .</p>
    </div>
    <div class="v-main-wrapper__tabbar">
      <div class="tab active purple">
        <router-link :to="{name: 'main'}">
          <p class="v-main-wrapper__home">Home</p>
        </router-link>
      </div>
      <div class="tab pink">
        <router-link :to="{name: 'favourit', params: {favourit_data: FAVOURIT}}">
          <p class="v-main-wrapper__favourit">Favourites</p>
        </router-link>
      </div>
      <div class="tab yellow">
        <router-link :to="{name: 'cart', params: {cart_data: CART}}">
          <p class="v-main-wrapper__cart" >Cart</p>
        </router-link>
      </div>
      <div v-if="isInfoButtonAdminVisible">
        <button class="v-main-wrapper__admin" @click="ShowPopupInfo">Admin</button>
      </div>

    </div>
  </div>


</template>

<script>

 // import VCatalog from "@/components/v-catalog";
 // import VCart from "@/components/v-cart";
import {mapGetters} from "vuex";
 // import VMainMenu from "@/components/v-main-menu";
 // import VPopupAdmin from "@/components/popup/v-popup-admin";
let tg = window.Telegram.WebApp;

export default {
    name: "v-main-wrapper",
  components: {
      // VPopupAdmin
  },
  // components: {VCart, VCatalog},
    props:{},
    data(){
      return{
        title: 'Main wrapper',
        isInfoPopupAdminVisible: false,
        isInfoButtonAdminVisible: false
      }
    },
    computed: {
      ...mapGetters([
        'CART',
          'FAVOURIT',
          'PRODUCT'

      ])
    },
    methods: {
      ShowButtonAdmin(){
        console.log('im did it');
        console.log(tg.initDataUnsafe.user.id);
        if(tg.initDataUnsafe.user.id === 435066431) {
          this.isInfoButtonAdminVisible = true;
        }
      },
      ShowPopupInfo(){
        this.isInfoPopupAdminVisible = true;
      }
    }, //clicks, i tp
    watch: {},
    mounted() {
      console.log('hello, im a live');
      console.log(this.isInfoButtonAdminVisible)
    }
  }

</script>

<style lang="scss">
  .v-main-wrapper{
    max-width: 900px;
    margin: 0 auto;

    &__tabbar{
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      height: 10%;
      padding: $padding*3;
      justify-content: space-between;
      display: flex;
      background-color: #ffffff;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.16);
    }
    &__helper{

      padding: $padding*4;
      justify-content: center;
      display: flex;
      height: 10%;
      background-color: #ffffff;
      bottom: 0;
      right: 0;
      left: 0;
    }

    &__home{
      padding: $padding*2;
      border: solid 1px #aeaeae;
    }
    &__cart{
      padding: $padding*2;
      border: solid 1px #aeaeae;
    }
    &__favourit{
      padding: $padding*2;
      border: solid 1px #aeaeae;
    }
    &__admin{
      padding: $padding*2;
      border: solid 1px #aeaeae;
    }


  }



</style>