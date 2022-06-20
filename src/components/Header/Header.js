import React from 'react';
import logo from '../../../src/logo.jpg'
import './Header.css'


const Header = () => {
    return (
        <div className='header'>
            <div className="navigation">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav">
                    <a href="shop">Shop</a>
                    <a href="cart">Cart</a>
                    <a href="checkout">Checkout</a>
                </div>
            </div>
        </div>
    );
};

export default Header;