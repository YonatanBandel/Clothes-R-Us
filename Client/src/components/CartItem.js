import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config';
import Item from './Item';

export function CartItem(props) {
    return (
<li style={{textAlign: 'center'}} key={props.product.id}>
        <Item 
        id={props.item.id}
        title={props.product.title} 
        quantity={props.item.quantity} 
        price={props.product.price} 
        description={props.product.description} 
        imageSource={API_URL + props.product.imageRef}/>
    <Link to="/cart"><i className="material-icons" onClick={()=>{props.onAddQuantity(props.product.id)}}>arrow_drop_up</i></Link>
        <Link to="/cart"><i className="material-icons" onClick={()=>{props.onSubstractQuantity(props.product.id)}}>arrow_drop_down</i></Link>
        <button className="waves-effect waves-light btn blue remove" onClick={()=>{props.onItemRemove(props.product.id)}}>Remove</button>                            
</li>    );
}