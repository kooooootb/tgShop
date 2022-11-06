import axios from "axios";

export default {
    GET_PRODUCTS_FROM_API({commit}) {
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
}
// http://localhost:3000/products