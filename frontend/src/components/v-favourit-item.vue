<template>
  <div class="v-favourit-item">
    <img class="v-favourit-item-image" src="" alt="img">
    <div class="v-favourit-item-info">
      <p class="v-favourit-item-name">{{favourit_item_data.name}}</p>
      <p class="v-favourit-item-price">Price: {{favourit_item_data.price}}</p>
      <p class="v-favourit-item-in-stocks">In stocks: {{favourit_item_data.in_stock}}</p>
    </div>
    <button @click="deleteFromFavourit">Delete</button>
  </div>
</template>

<script>
export default {
  name: "v-favourit-item",
  props: {
    favourit_item_data: {
      type: Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return{}
  },
  computed:{},
  methods: {
    deleteFromFavourit(){
      this.$emit('deleteFromFavourit')
    }
  },
  mounted() {}

}
</script>

<style lang="scss">
.v-favourit-item{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #2c3e50;
  padding: $padding*2;
  margin-bottom: $margin*2;
  &__image{
    max-width: 50px;
  }

}
</style>