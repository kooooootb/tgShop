export default {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
    },
    SET_PRODUCTS_TO_CART: (state, cart) => {
        state.cart = cart;
    },
    SET_PRODUCTS_TO_FAVOURIT: (state, favourit) => {
        state.favourit = favourit;
    },
    SET_LINK_TO_LINK: (state, link) => {
        state.link = String(link);
    },


    SET_CART: (state, product) => {
        if (state.cart.length) {
            let isProductExist = false;
            state.cart.map(function (item) {
                if (item.id === product.id) {
                    isProductExist = true;
                    item.quantity++;

                }
            })
            if (!isProductExist) {
                state.cart.push(product)
            }
        } else {
            state.cart.push(product)
        }
    },
    REMOVE_FROM_CART: (state, index) => {
        state.cart.splice(index, 1)
    },
    SET_FAVOURIT: (state, product) => {
        if (state.favourit.length) {
            let isProductExist = false;
            state.favourit.map(function (item) {
                if (item.id === product.id) {
                    isProductExist = true;
                    item.quantity++;

                }
            })
            if (!isProductExist) {
                state.favourit.push(product)
            }
        } else {
            state.favourit.push(product)
        }
    },
    REMOVE_FROM_FAVOURIT: (state, index) => {
        state.favourit.splice(index, 1)
    }
}