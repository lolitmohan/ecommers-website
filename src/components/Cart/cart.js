import React from 'react';

const cart = (props) => {
    const {cart} = props;

    let total = 0;
    for (const product of cart){
        total = total + product.price
    }

    return (
        <div>
            <h2>Product in Cart : </h2>
            <h2>Total Items Added :{props.cart.length}</h2>
            <h3>Total: ${total}</h3>
        </div>
    );
};

export default cart;