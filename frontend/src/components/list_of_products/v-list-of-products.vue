<template>
  <div class="v-list-of-products-wrapper" >
    <div class="v-list-of-products" ref="list_of_products_wrapper">
      <div class="v-list-of-products__header">
        <span>Your products</span>
      </div>
      <div class="v-list-of-products__content">
        <p>Total: {{cartTotal}}</p>
        <label>
          Add comments:
          <textarea name="comment" cols="39" rows="3"></textarea>
        </label>
        <slot>
        </slot>
      </div>
      <div class="v-list-of-products__footer">
        <button class="v-list-of-products__close" @click="closeListProducts">Close</button>
      </div>

    </div>
  </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "v-list-of-products",
  props:{
    list_cart_data: {
      type: Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return {}
  },
  computed:{

    cartTotal(){
      let result = []
      for( let item of this.list_cart_data){
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
      'GET_PRODUCTS_FROM_API_CART'
    ]),
    closeListProducts(){
      this.$emit('closeListProducts')
    }


  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function (item){
      if(item.target === vm.$refs['list_of_products_wrapper']){
        vm.closeListProducts()
      }
    })
    this.GET_PRODUCTS_FROM_API_CART();

  }
}
</script>

<style lang="scss">
.v-list-of-products-wrapper{
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
.v-list-of-products{

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
  }
}


</style>