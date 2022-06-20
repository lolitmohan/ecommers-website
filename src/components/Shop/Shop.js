import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';




const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(()=>{
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

const addToCart = (product) =>{
    // console.log("click")
    const newCart = [...cart, product]
    setCart(newCart)
    console.log(cart)
}


    return (
        <div className='shop-container'>
            <div className="product-container">
                <h1>Products {products.length}</h1>
                <div className="all-product">
                    {
                        products.map(product =>  <Product product ={product} addToCart= {addToCart} key={product.id}></Product>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <div className="cart">
                    <p>This is cart : {cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;