import Vue from "vue";
import Router from 'vue-router'
import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'
import vFavourit from '../components/v-favourit'
import vMainMenu from '../components/v-main-menu'
import vMainItem from '../components/v-main-item'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
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
        },
        {
            path: '/product',
            name: 'product',
            component: vMainItem,
            props: true,
        }
        ]
})

export default router;