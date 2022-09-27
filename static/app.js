let products = [];
let user_id = 777;
fetch(`app/?user_id=${user_id}`,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
})
    .then((response) => response.json())
    .then((data) => products = data);

Vue.component('all-product', {
    props:{
        products: {
            type: Array,
            required: true
        }
    },
    template:`
        <table class="product-table">
          <tr class="cell" v-for="product of products">
            <div class="product">
              <div class="product-image">
                <img :src="product.image"  alt=""/>
              </div>
              
              <div class="product-info">
                <h1 class="name">{{product.name}}</h1>
                <p class="product-description">{{product.description}}</p>
                <div class="product-stock" v-if="product.quantity" >В наличии</div>
                <div class="product-stock" v-else-if="product.PreOrder">Предзаказ</div>
                <div class="product-stock" v-else>Продажа закончена</div>
                <form class="button-for-basket">
                  <button class="product-inBasket">В корзину</button>
                </form>
              </div>
            </div>
          </tr>
        </table>
    `
})

Vue.component("tab-home", {
    template: `
      <div class="product-list">
        <all-product :products="products"></all-product>
      </div>
    `,
    data: function (){
        return {products}
    }
});

Vue.component("bag-product", {
    props:{
        products: {
            type: Array,
            required: true
        }
    },
    template:`
      <table class="product-table">
      <tr class="cell" v-for="product of products" v-if="product.inBag">
        <div class="product">
          <div class="product-image">
            <img :src="product.image"  alt=""/>
          </div>

          <div class="product-info">
            <h1 class="name">{{product.name}}</h1>
            <p class="product-description">{{product.description}}</p>
            <div class="product-stock" v-if="product.quantity" >В наличии</div>
            <div class="product-stock" v-else-if="product.PreOrder">Предзаказ</div>
            <div class="product-stock" v-else>Продажа закончена</div>
<!--            <form class="button-for-basket">-->
<!--              <button class="product-inBasket">В корзину</button>-->
<!--            </form>-->
          </div>
        </div>
      </tr>
      </table>
    `,
})

Vue.component("tab-bag", {
    template: `
      <div class="product-list">
      <bag-product :products="products"></bag-product>
      </div>
    `,
    data: function (){
        return {products}
    }
});
Vue.component("tab-favourite", {
    template: `
      <div class="product-list">
      <all-product :products="products"></all-product>
      </div>
    `,
    data: function(){
        return {
            products
        }
    }
});

let app = new Vue({
    el:'#app',
    data:{
        currentTab: "Home",
        tabs:["Home", "Bag", "Favourite"]
    },
    computed:{
        currentTabComponent: function (){
            return "tab-"+this.currentTab.toLowerCase();
        }
    }
});
