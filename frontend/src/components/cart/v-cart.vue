<template>
  <div class="v-cart">
    <h1>Cart</h1>
    <p v-if="!cart_data.length">There are no products in cart...</p>
    <div class="v-cart-list">
      <v-list-of-products
          v-if="isInfoListProductVisible"
          @closeListProducts="closeInfoListProducts"
      >
      </v-list-of-products>
      <v-cart-item
        v-for="item in CART"
        :key="item.id"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(item.id)"
      />
    </div>
    <button class="v-cart__show-info " @click="showInfoListProducts">Click to place an order</button>
  </div>
</template>

<script>
import VCartItem from './v-cart-item'
import VListOfProducts from "@/components/list_of_products/v-list-of-products";
import {mapActions, mapGetters} from "vuex";
import VCart from "@/components/cart/v-cart";
let tg = window.Telegram.WebApp;

//close page after clicked to main button
// tg.onEvent('mainButtonClicked', function(){
//   console.log('link2='+String(VCart.LINK));
//   location.href=String(VCart.LINK);
//   // VCart.SET_LINK_TO_LINK('-');
//   tg.close();
// });
// tg.MainButton.onClick(VCart.OpenInvoice())
// tg.onEvent('mainButtonClicked', VCart.OpenInvoice());
tg.onEvent('mainButtonClicked', function (){
  console.log('link2= '+String(VCart.computed.LINK));
  location.href=String(VCart.computed.LINK);
  tg.close();
})

export default {

    name: "v-cart",
    components:{
      VCartItem,
      VListOfProducts,
    },
    props:{

      cart_data: {
        type: Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return{
        isInfoListProductVisible: false
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART',
        'FAVOURIT',
          'LINK'
      ])

    },
    methods: {
      ...mapActions([
          'DELETE_FROM_CART',
          'GET_PRODUCTS_FROM_API_CART',
          'GET_LINK_INVOICE'
      ]),
      deleteFromCart(index){
        this.DELETE_FROM_CART(index);
        this.GET_PRODUCTS_FROM_API_CART();
      },
      showInfoListProducts(){
        this.isInfoListProductVisible = true;
        this.GET_LINK_INVOICE();
        this.link = String(this.LINK);
        console.log('link1= '+String(this.LINK));
        tg.MainButton.show();
      },

      closeInfoListProducts(){
        this.isInfoListProductVisible = false;
        tg.MainButton.hide();
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API_CART();
    },


  }

</script>

<style lang="scss">
.v-cart{
  background-color: #ffffff;
}
.v-cart-link-to-back{
  position: absolute;
  top: 10px;
  right: 10px;
  padding: $padding*2;
  border: solid 1px #aeaeae;
}

</style>