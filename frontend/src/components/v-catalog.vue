<template>
  <div class="v-catalog">
    <keep-alive>
      <router-view>
      </router-view>
    </keep-alive>
    <h1>Catalog</h1>
    <div class="v-catalog-list">
<!--      <router-link :to="{name: 'product', params: {product: PRODUCT}}">-->
        <v-catalog-item
          v-for="product in PRODUCTS"
          :key="product.id"
          :product_data="product"
          @AddToCart="AddToCart"
          @AddToFavourit="AddToFavourit"
        />
<!--      </router-link>-->
    </div>

  </div>

</template>

<script>
import vCatalogItem from "./v-catalog-item"
import {mapActions, mapGetters} from "vuex";
  export default {
    name: "v-catalog",
    components: {
      vCatalogItem
    },
    props: {},
    data(){
      return{

      }
    },
    computed: {
      ...mapGetters([
          'PRODUCTS',
        'CART',
          'FAVOURIT',
          'PRODUCT'
      ]),
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
          'ADD_TO_CART',
          'ADD_TO_FAVOURIT',
          'SET_PRODUCT'

      ]),
      AddToCart(data){
        this.ADD_TO_CART(data)
      },
      AddToFavourit(data){
        this.ADD_TO_FAVOURIT(data)
      },
      // AddToMainItem(data){
      //   this.SET_PRODUCT(data);
      // }

    },
    mounted() {

      this.GET_PRODUCTS_FROM_API();
    }
  }
</script>

<style lang="scss">
  .v-catalog {
    &_list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }
  .v-catalog-link-to-cart{
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding*2;
    border: solid 1px #aeaeae;
  }


</style>