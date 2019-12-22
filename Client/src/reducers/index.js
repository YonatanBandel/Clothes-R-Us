import * as ACTION_TYPE from "../actions/actionTypes";

const initState = {
    cart: {
        items: [],
        total: 0
    },
    products: []
}

const reducer = (state = initState, action)=>{
    switch (action.type) {     
        case ACTION_TYPE.SET_USERNAME: {
            return {
                ...state, 
                username: action.payload
            };
        }
        
        case ACTION_TYPE.CLEAR_USERNAME : {
            return {
                ...state,
                username: null
            }
        }

        case ACTION_TYPE.EMPTY_CART: {
            return {
                ...state,
                cart: {
                    items: []
                }
            }
        }
        
        case ACTION_TYPE.SEARCH_BY_PRODUCT_NAME: {
            const filter = action.payload;
            
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.title.toLowerCase().includes(filter.toLowerCase())) {
                        const newProduct = Object.assign({},product);
                        newProduct.show = true;
                        return newProduct;
                    } else {
                        const newProduct = Object.assign({},product);
                        newProduct.show = false;
                        return newProduct;
                    }
                })
            }
        }

        case ACTION_TYPE.SET_STORE_PRODUCTS: {
            const products = action.payload;

            return {
                ...state,
                products: products.map((product) => {
                        product.show = true;
                        return product;
                })
            }
        }

        case ACTION_TYPE.ADD_ITEM_TO_CART : {
            const productId = action.payload.id;
            const itemIndex = state.cart.items.findIndex(item=> item.id === productId);

            const newTotal = state.cart.total + action.payload.price;

            if (itemIndex === -1) { // Item doesn't exist in cart
                return {
                    ...state,
                    cart: {
                        items: [...state.cart.items, {
                            id: action.payload.id,
                            price: action.payload.price,
                            quantity: 1   
                        }],
                        total: newTotal
                    }
                }
            } else { // Item exist in cart
                const items = state.cart.items.map((item, index) => {
                    if (index === itemIndex) {
                      return {
                          id: item.id,
                          price: item.price,
                          quantity: item.quantity + 1
                      }
                    }
                    return item;
                  });
    
                return {
                    ...state,
                    cart: {
                        items,
                        total: newTotal
                    }
                }
            }
        }

        case ACTION_TYPE.REMOVE_ITEM_FROM_CART : {
            const itemIndex = state.cart.items.findIndex(item=> item.id === action.payload);

            const removedItem = state.cart.items[itemIndex];
            const newTotal = state.cart.total - (removedItem.price * removedItem.quantity )

            const items = state.cart.items.filter((item) => {
                if (item.id !== action.payload) {
                  return true;
                } 
                return false;
            });

            return{
                ...state,
                cart: {
                    ...state.cart,
                    items,
                    total: newTotal
                }
            }
        }

        case ACTION_TYPE.ADD_CART_ITEM_QUANTITY : {
            const itemIndex = state.cart.items.findIndex(item=> item.id === action.payload);
            const item = state.cart.items[itemIndex];

            const items = state.cart.items.map((item, index) => {
                if(index === itemIndex) {
                  return {
                      id: item.id,
                      price: item.price,
                      quantity: item.quantity + 1
                  }
                }
                return item;
              });

            return {
                ...state,
                cart: {
                    ...state.cart,
                    items,
                    total: state.cart.total + item.price
                }
            }
        }

        case ACTION_TYPE.SUBTRACT_CART_ITEM_QUANTITY : {  
            const itemIndex = state.cart.items.findIndex(item=> item.id === action.payload);
            const item = state.cart.items[itemIndex];
            
            let items = [];
            if (item.quantity > 1) {
                items = state.cart.items.map((val,idx) => {
                    if (idx === itemIndex) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    } else {
                        return val;
                    }
                });
            } else {
                items = state.cart.items = state.cart.items.filter((item,index) => {
                    if (index === itemIndex) {
                        return false;
                    }
                    return true;
                });
            }

            return {
                ...state,
                cart: {
                    ...state.cart,
                    items,
                    total: state.cart.total - item.price
                }
            }
        }

        default : {
            return state
        }    
    }
}  

export default reducer