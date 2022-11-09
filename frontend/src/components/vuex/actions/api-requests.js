import axios from "axios";

export default {
    GET_PRODUCTS_FROM_API({commit}, user_id) {
        return axios('https://tgshop.hopto.org/api/products/?user_id=' + user_id, {

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
    GET_PRODUCTS_FROM_API_CART({commit}, user_id){
        return axios('https://tgshop.hopto.org/api/bag/?user_id=' + user_id, {

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
    GET_PRODUCTS_FROM_API_FAVOURIT({commit}, user_id){
        return axios('https://tgshop.hopto.org/api/favourites/?user_id=' + user_id, {

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