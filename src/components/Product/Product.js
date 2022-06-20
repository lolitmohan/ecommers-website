import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.product)

    const {name, price, stock, img} = props.product;
    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt="product" />
            </div>
            <h2>{name}</h2>
            <h3>${price}</h3> 
            <p> In Stock : {stock}</p>
            <button onClick={props.product} className='btn-cart'> Add to cart</button>

            {/* <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h4>{stock}</h4> */}
        </div>
    );
};

export default Product;