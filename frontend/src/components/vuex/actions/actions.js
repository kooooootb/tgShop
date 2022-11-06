
export default {

    ADD_TO_CART({commit}, product) {
        commit('SET_CART', product)
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