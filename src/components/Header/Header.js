import React from 'react';
import logo from '../../logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="navigation">
                <div className="logo">
                    <img src={logo} alt="amarbay" />
                </div>
                <div className="nav">
                    <ul>
                        <li><a href="Shop">Shop</a></li>
                        <li><a href="Product">Product</a></li>
                        <li><a href="Cart">Cart</a></li>
                        <li><a href="CheckOut">CheckOut</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;