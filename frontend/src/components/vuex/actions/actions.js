import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

export default {


    POST_ADD_TO_CART({commit}, {product, user_id}) {
        // axios({
        //     method: "POST",
        //     url: 'https://tgshop.hopto.org/api/add_bag/?user_id=' + user_id,
        //     data: product,
        //     headers: {
        //         "content-type": "application/json"
        //     }
        // })
        let url = 'https://tgshop.hopto.org/api/add_bag/?user_id='+user_id;
        console.log(url);
        axios.post(url, product, {
            method: "POST"
        })
            .then((user_id) => {
                commit('SET_PRODUCTS_TO_CART', user_id);
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });

    },
    DELETE_FROM_CART({commit}, index) {
        commit('REMOVE_FROM_CART', index)
    },
    ADD_TO_FAVOURIT({commit}, product) {
        commit('SET_FAVOURIT', product)
    },
    DELETE_FROM_FAVOURIT({commit}, index) {
        commit('REMOVE_FROM_FAVOURIT', index)
    }
}