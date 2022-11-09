import axios from "axios";
// function getCookie(name) {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         const cookies = document.cookie.split(';');
//         for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             // Does this cookie string begin with the name we want?
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// }
//
// const csrftoken = getCookie('csrftoken');

export default {


    POST_ADD_TO_CART({commit}, product, user_id) {
        axios.post('https://tgshop.hopto.org/api/add_bag/?user_id=' + user_id,{
            body: product
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