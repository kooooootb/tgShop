export default {
    PRODUCTS(state) {
        return state.products;
    },
    CART(state) {
        return state.cart;
    },
    FAVOURIT(state) {
        return state.favourit;
    },
    LINK(state) {
        console.log("getter="+state.link);
        return state.link;
    }
}