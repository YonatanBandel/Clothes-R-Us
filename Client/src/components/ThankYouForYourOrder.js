import { Footer } from "./Footer";
import { Link } from 'react-router-dom'
import React from 'react';

export default function ThankYouForYourOrder() {
    return (
        <div>
        <div className="center">
            <h4>Thank you for your order !</h4>
            <Link to="/">Continue Shopping</Link>
        </div>
        <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer></Footer>
    </div>
    </div>)
}