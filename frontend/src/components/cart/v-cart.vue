<template>
  <div class="v-cart">
    <h1>Cart</h1>
    <p v-if="!cart_data.length">There are no products in cart...</p>
    <div class="v-cart-list">
      <v-list-of-products
          v-if="isInfoListProductVisible"
          @closeListProducts="closeInfoListProducts"
      >
        <p>Total: {{cartTotal}}</p>
        <label>
          Add comments:
          <textarea name="comment" cols="40" rows="3"></textarea>
        </label>
      </v-list-of-products>
      <v-cart-item
        v-for="item in CART"
        :key="item.id"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(item.id)"
      />
    </div>
    <button class="v-cart__show-info " @click="showInfoListProducts">Show</button>
  </div>
</template>

<script>
import VCartItem from './v-cart-item'
import VListOfProducts from "@/components/list_of_products/v-list-of-products";
import {mapActions, mapGetters} from "vuex";
let tg = window.Telegram.WebApp;

export default {

    name: "v-cart",
    components:{
      VCartItem,
      VListOfProducts
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
      ]),
      cartTotal(){
        let result = []
        for( let item of this.cart_data){
          result.push(item.price)
        }
        result = result.reduce(function (sum, el){
          return sum + el;
        })

        return result;
      }
    },
    methods: {
      ...mapActions([
          'DELETE_FROM_CART',
          'GET_PRODUCTS_FROM_API_CART'
      ]),
      deleteFromCart(index){
        this.DELETE_FROM_CART(index);
        this.GET_PRODUCTS_FROM_API_CART();
      },
      showInfoListProducts(){
        this.isInfoListProductVisible = true;
        tg.MainButton.show();
      },
      closeInfoListProducts(){
        this.isInfoListProductVisible = false;
        tg.MainButton.hide();
      }
    },
    mounted() {

      this.GET_PRODUCTS_FROM_API_CART();
    }

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