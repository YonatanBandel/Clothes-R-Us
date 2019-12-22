import { Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import  { API_URL } from '../config';
import { connect } from 'react-redux'
import { emptyCart } from '../actions'
import ThankYouForYourOrder from './ThankYouForYourOrder';
import Item from './Item';

class Checkout extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          aPurchaseWasMade: false
        };
    }
    
    // upon landing in this page from 'Cart' - scroll page to the top
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    confirmOrderClick(items) {
        fetch(API_URL + 'checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(this.props.cart.items)
        });

        this.setState({aPurchaseWasMade:true});
        this.props.emptyCart();
    }

    getTotal() {
        return this.props.cart.items.map((item) => item.price * item.quantity).reduce((a,b) => a+b);
    }

    render() {
        if (this.state.aPurchaseWasMade) {
            return <ThankYouForYourOrder />;
        } else if (this.props.cart.items.length === 0) {
            return(<Redirect to="/" />)
        }
        else {
            const numberOfItems = this.props.cart.items.length;
            const items = this.props.cart.items.map(item => 
                {
                    const id = item.id;
                    const product = this.props.products.filter(p=> p.id === id)[0];
                    const imageSrc = API_URL + product.imageRef;

                    return (<li key={id}>
                        <Item title={product.title}
                         id={item.id}
                         description={product.description}
                         imageSource={imageSrc}
                         price={product.price}
                         quantity={item.quantity}
                         />
                        </li>)
                });
            const reviewItemsString = numberOfItems === 1 ?
             "Please review your item :" : "Please review your items :";

            return (
                    <div className="container">
                        <div className="cart">
                            <h5>{reviewItemsString}</h5>
                            <ul className="collection">
                                {items}
                            </ul>
                        </div>
                         
                        <div>
                        <div className="collection">
                            <b>Total: {this.getTotal()} $</b> ({numberOfItems} items overall)
                        </div>
                            <div>
                                <button className="btn waves-effect waves-light" onClick={()=>{this.confirmOrderClick()}}>Confirm and pay</button>
                            </div>
                        </div>                
                    </div>            
            )
        }
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        emptyCart: () => dispatch(emptyCart())
        }
}

const mapStateToProps = (state)=>{
    return {
        products: state.products,
        cart: state.cart,
        user: state.user
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout)