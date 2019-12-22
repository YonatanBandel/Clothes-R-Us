import React from 'react';
import { Link } from 'react-router-dom'

export function CartSummary(props) {

    const itemsSummary = props.items.map((item) => {
        return <li key={item.id}>Id: {item.id}, Quantity: {item.quantity}</li>
    });

    return (   
    <div>             
    <div className="collection">
        <ul>
            {itemsSummary}
        </ul>
        <b>Total Price: {props.total} $</b>
    </div>
    <div>
        <Link to="/checkout">
            <button className="btn waves-effect waves-light">Checkout</button>
        </Link>
    </div>         
</div>);
}