<template>
  <div class="v-favourit">
    <h1>Favourites</h1>
    <p v-if="!favourit_data.length">There are no products in favourites...</p>
    <div class="v-favourit-list">
      <v-favourit-item
          v-for="(item, index) in favourit_data"
          :key="item.id"
          :favourit_item_data="item"
          @deleteFromFavourit="deleteFromFavourit(index)"
      />
    </div>
  </div>
</template>

<script>
import VFavouritItem from './v-favourit-item'
import {mapActions} from "vuex";

let tg = window.Telegram.WebApp;


export default {
  name: "v-favourit",
  components:{
    VFavouritItem
  },
  props:{
    favourit_data: {
      type: Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return{}
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_FAVOURIT',
        'GET_PRODUCTS_FROM_API_FAVOURIT'
    ]),
    deleteFromFavourit(index){
      this.DELETE_FROM_FAVOURIT(index);
    }
  },
  mounted() {

    this.GET_PRODUCTS_FROM_API_FAVOURIT(tg.initDataUnsafe.user.id);//{userid});
    // console.log(window.Telegram.WebApp.initDataUnsafe.user.id);
  }

}
</script>

<style lang="scss">
.v-favourit-link-to-back{
  position: absolute;
  top: 10px;
  right: 10px;
  padding: $padding*2;
  border: solid 1px #aeaeae;
}

</style>