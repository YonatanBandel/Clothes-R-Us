import { connect } from 'react-redux';
import React, { Component } from 'react';
import { addCartItemQuantity, removeItemFromCart, subtractCartItemQuantity } from '../actions'
import {CartItem } from './CartItem';
import {CartSummary} from './CartSummary';

class Cart extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        if (this.props.items.length === 0) {
            return <div>Cart is empty</div>
        }
        const cartItems = this.props.items.map(cartItem=>{
            return(                       
                <CartItem key={cartItem.id} 
                 product={this.props.products.filter((p) => p.id === cartItem.id)[0]}
                 item={cartItem}
                 onAddQuantity={() => this.props.addQuantity(cartItem.id)}
                 onSubstractQuantity={() => this.props.subtractQuantity(cartItem.id)}
                 onItemRemove={() => this.props.removeItemFromCart(cartItem.id)}
                ></CartItem>                     
            )
        });

        return (
            <div>
                {cartItems}
                <CartSummary total={this.getTotal()} items={this.props.items}></CartSummary>
            </div>
        )
    }

    getTotal() {
        return this.props.items.map((item) => item.price * item.quantity).reduce((a,b) => a+b);
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        items: state.cart.items,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addQuantity: (itemId) => dispatch(addCartItemQuantity(itemId)),
        subtractQuantity: (itemId) => dispatch(subtractCartItemQuantity(itemId)),
        removeItemFromCart: (itemId) => dispatch(removeItemFromCart(itemId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);