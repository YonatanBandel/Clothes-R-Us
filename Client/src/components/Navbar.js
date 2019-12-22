import { Link } from 'react-router-dom'
import React from 'react';

const navbar = {backgroundColor: '#3667c2'}; // blue color for navigation bar

export function Navbar(props) {     
    return (
        <nav style ={navbar}>                   
            <div>
                <Link to="/" className="brand-logo">Clothes-R-Us</Link>                
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">My cart</Link></li>
                    <li><Link to="/delivery">Delivery policy</Link></li>
                    <li><Link to="/products">Our Products</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                </ul>
            </div>            
        </nav>
    )
}