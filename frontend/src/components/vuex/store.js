import Vue from 'vue'
import Vuex from 'vuex'
import commonActions from "./actions/actions"
import apiRequests from "./actions/api-requests";
import mutations from "./mutations/mutations"
import getters from "./getters/gettters"

const actions ={ ...commonActions, ...apiRequests}
Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
        favourit: [],
        link: NaN
    },
    mutations,
    actions,
    getters


});

export default store;