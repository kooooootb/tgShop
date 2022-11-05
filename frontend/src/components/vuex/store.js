import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
        favourit: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state , products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            if(state.cart.length){
                let isProductExist = false;
                state.cart.map(function (item){
                    if(item.id === product.id){
                        isProductExist = true;
                        item.quantity++;

                    }
                })
                if(!isProductExist){
                    state.cart.push(product)
                }
            }else{
                state.cart.push(product)
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },
        SET_FAVOURIT: (state, product) => {
            if(state.favourit.length){
                let isProductExist = false;
                state.favourit.map(function (item){
                    if(item.id === product.id){
                        isProductExist = true;
                        item.quantity++;

                    }
                })
                if(!isProductExist){
                    state.favourit.push(product)
                }
            }else{
                state.favourit.push(product)
            }
        },
        REMOVE_FROM_FAVOURIT: (state, index) => {
            state.favourit.splice(index, 1)
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}){
            return axios('https://tgshop.hopto.org/api/products/?user_id=777', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        ADD_TO_CART({commit}, product){
            commit('SET_CART', product)
        },
        DELETE_FROM_CART({commit}, index){
            commit('REMOVE_FROM_CART', index)
        },
        ADD_TO_FAVOURIT({commit}, product){
            commit('SET_FAVOURIT', product)
        },
        DELETE_FROM_FAVOURIT({commit}, index){
            commit('REMOVE_FROM_FAVOURIT', index)
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state){
            return state.cart;
        },
        FAVOURIT(state){
            return state.favourit;
        }

    }
});

export default store;
