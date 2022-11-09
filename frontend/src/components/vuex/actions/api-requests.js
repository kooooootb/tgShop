import axios from "axios";

export default {
    GET_PRODUCTS_FROM_API({commit}, id) {
        return axios('https://tgshop.hopto.org/api/products/?user_id=' + id, {

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
    GET_PRODUCTS_FROM_API_CART({commit}){
        return axios('http://localhost:3000/cart/', {

            method: "GET"
        })
            .then((products) => {
                commit('SET_PRODUCTS_TO_CART', products.data);
                return products;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    },
    GET_PRODUCTS_FROM_API_FAVOURIT({commit}){
        return axios('http://localhost:3000/favourit/', {

            method: "GET"
        })
            .then((products) => {
                commit('SET_PRODUCTS_TO_FAVOURIT', products.data);
                return products;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }
}
// http://localhost:3000/products
// https://tgshop.hopto.org/api/products/?user_id=777