import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)

    const {img, name, price, stock, id} = props.product;

    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt="Lolit" />
            </div>
            <h2>Name: {name}</h2>
            <h3>Price: ${price}</h3>
            <p>In stock{stock}</p>
            <h3>Product ID: {id}</h3>
            <div className="btn-carts">
                <button className='btn' onClick={ ()=> props.addToCart(props.product)}>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;