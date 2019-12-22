import React from 'react';

export default function Item(props) {
    return (
        <div>
            <div className="item-img"> 
                <img src={props.imageSource} alt={props.title} />
            </div>

            <div className="item-desc">
                <ul>
                <li>Item ID - {props.id}</li>
                <li className="title">{props.title}</li>
                <li>{props.description}</li>
                <li><b>Price: {props.price}$</b></li> 
                <li><b>Quantity: {props.quantity}</b></li>
                </ul>
            </div>
    </div>
    );
}