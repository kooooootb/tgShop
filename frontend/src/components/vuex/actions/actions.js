import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

export default {

    POST_ADD_TO_CART({commit}, product) {
        let tg = window.Telegram.WebApp;
        let url = 'https://tgshop.hopto.org/api/bag/?user_id='+tg.initDataUnsafe.user.id;
        axios.post(url, {
            id: product.id,
            method: "POST"
        })
            .then(() => {
                commit('GET_PRODUCTS_FROM_API_CART');
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });

    },

    DELETE_FROM_CART({commit}, product) {
        let tg = window.Telegram.WebApp;
        let url = 'https://tgshop.hopto.org/api/bag/?user_id='+tg.initDataUnsafe.user.id;
        axios.post(url, {
            id: product.id,
            method: "DELETE"
        })
            .then(() => {
                commit('GET_PRODUCTS_FROM_API_CART');
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
        },
    ADD_TO_FAVOURIT({commit}, product) {
        commit('SET_FAVOURIT', product)
    },
    DELETE_FROM_FAVOURIT({commit}, index) {
        commit('REMOVE_FROM_FAVOURIT', index)
    }
}