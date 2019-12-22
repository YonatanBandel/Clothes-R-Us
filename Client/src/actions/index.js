import * as ACTION_TYPE from "./actionTypes";

/** User Action */

export const register = (registered) => {
    return {
        type: ACTION_TYPE.REGISTER,
        payload: registered
    }
}

export const setUsername = (username) => {
    return {
        type: ACTION_TYPE.SET_USERNAME,
        payload: username
    }
}

export const clearUsername = () => {
    return {
        type : ACTION_TYPE.CLEAR_USERNAME
    }
}

/** Cart */

export const emptyCart = () => {
    return {
        type: ACTION_TYPE.EMPTY_CART
    }
}

export const addProductToCart = (product) => {
    return {
        type: ACTION_TYPE.ADD_ITEM_TO_CART,
        payload : product
    }
}

export const removeItemFromCart = (id) => {
    return {
        type: ACTION_TYPE.REMOVE_ITEM_FROM_CART,
        payload : id
    }
}

export const addCartItemQuantity = (id) => {
    return {
        type: ACTION_TYPE.ADD_CART_ITEM_QUANTITY,
        payload : id
    }
}

export const subtractCartItemQuantity = (id) => {
    return {
        type: ACTION_TYPE.SUBTRACT_CART_ITEM_QUANTITY,
        payload : id
    }
}

export const setStoreProducts = (products) => {
    return {
        type: ACTION_TYPE.SET_STORE_PRODUCTS,
        payload: products
    }
}

export const filterBySearchBarQuery = (query) => {
    return {
        type: ACTION_TYPE.SEARCH_BY_PRODUCT_NAME,
        payload: query
    }
}
