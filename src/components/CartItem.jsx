import './Style/CartItem.css';
import React, { useState } from 'react';


// Tar emot 'item' och 'onRemove' som props från ShoppingCart.
const CartItem = ({ item, onRemove }) => {
    return (
        <div className="cart-item">
            <img className="cart-image" src={item.image} alt={item.name} />
            <div>
                <div className="cart-item-info">
                    <h2>{item.name}</h2>
                    <p className="price">{item.price} kr</p>
                </div>
                <div className='cart-item-quantity'>
                    <button className='cart-item-btn'>-</button>
                    <p>1</p>
                    <button className='cart-item-btn'>+</button>
                    <button className='remove-cart-item' onClick={() => onRemove(item.id)}>Ta bort</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;

