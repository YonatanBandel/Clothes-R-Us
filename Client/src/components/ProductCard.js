import React from 'react';
import { API_URL } from '../config';

export function ProductCard(props) {
    const {id,imageRef,title,price,description} = props.item;

    return (                
    <div className="card">
    <div className="card-image">
        <img src={API_URL + imageRef} alt={title}/>
    </div>
    <div className="card-title">{title}</div>
    <span to="/" className="btn-floating halfway-fab waves-effect waves-light blue"
     onClick={() => props.onAddItem(id)}><i className="material-icons">+</i></span>                        
    <div className="card-content">
        <p>{description}</p>
        <p><b>Price: {price}$</b></p>
    </div>
</div>);
}
