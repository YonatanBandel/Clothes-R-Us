import React from 'react';

export default function Transaction(props) {
    return (
    <ul>
        <li>Transaction Id: {props.id}</li>
        <li>Username: {props.username}</li>
        <li>Date: {props.processingTime}</li>
        <li>Number of items: {props.items.length}</li>
        <li>Total payment: {props.payment}</li>
    </ul>)
}