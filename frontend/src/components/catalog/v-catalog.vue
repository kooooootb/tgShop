<template>
  <div class="v-catalog">
    <keep-alive>
      <router-view>
      </router-view>
    </keep-alive>
    <h1>Catalog</h1>
    <div class="v-catalog-list">
        <v-catalog-item
          v-for="product in PRODUCTS"
          :key="product.id"
          :product_data="product"
          @AddToCart="AddToCart"
          @AddToFavourit="AddToFavourit"
        />
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
      ]),
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
          'ADD_TO_CART',
          'ADD_TO_FAVOURIT',
          'POST_ADD_TO_CART',
          'GET_PRODUCTS_FROM_API_CART'


      ]),
      AddToCart(data){
        this.POST_ADD_TO_CART(data)
        this.GET_PRODUCTS_FROM_API_CART()
      },
      AddToFavourit(data){
        this.ADD_TO_FAVOURIT(data)
      }

    },
    mounted() {

      this.GET_PRODUCTS_FROM_API();
    }
  }
</script>

<style lang="scss">
  .v-catalog {
    background-color: #ffffff;
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