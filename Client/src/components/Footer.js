import iconImage from '../images/iconImage.jpg';
import React from 'react';

export function Footer(props) {
    return (<div>
                <img alt="Store Logo" className="nav-logo" src = {iconImage}></img>
                <span style={{fontSize : 10}}>
                    <br/>©Made by Inbal Preuss and Yonatan Bandel
                </span>
            </div>);
}