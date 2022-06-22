import React from 'react';
import './Shop.css'
import  {useEffect, useState} from 'react'
import Product from '../Product/Product';
import Cart from '../Cart/cart'


const Shop = () => {
    
    const [product, setProduct] = useState([])
    const [cart, setCart] = useState([])


    const addToCart = (product)=>{
        console.log("Click");

        const newCart = [...cart, product]
        setCart(newCart)
        console.log(cart)

    }

    useEffect(()=>{
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => setProduct(data))

    },[])

     

    return (
        <div className='shop-container'>
        <h2>Thsi is a Product  {product.length}</h2>
            <div className="product-container">
                <div className="all-product">
                    {
                        product.map(product => <Product product={product} addToCart={addToCart} key={product.id}></Product>)
                    }
                </div>
                <div className="cart">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;