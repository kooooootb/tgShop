import Vue from "vue";
import Router from 'vue-router'
import vCatalog from '../components/catalog/v-catalog'
import vCart from '../components/cart/v-cart'
import vFavourit from '../components/favourit/v-favourit'
import vMainMenu from '../components/v-main-menu'


Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '',
            name: 'main',
            component: vMainMenu

        },
        {
            path: '/catalog',
            name: 'catalog',
            component: vCatalog

        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true
        },
        {
            path: '/favourit',
            name: 'favourit',
            component: vFavourit,
            props: true
        }
        ]
})

export default router;