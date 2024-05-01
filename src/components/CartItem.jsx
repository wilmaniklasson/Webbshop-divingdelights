import React from 'react';
import './Style/CartItem.css';

const CartItem = ({ item, onRemove, onDecrease, onIncrease }) => {
    return (
        <div className="cart-item">
            <img className="cart-image" src={item.image} alt={item.name} />
            <div>
                <div className="cart-item-info">
                    <h2>{item.name}</h2>
                    <p className="price">{item.price} kr</p>
                </div>
                <div className='cart-item-quantity'>
                    <button className='cart-item-btn' onClick={() => onDecrease(item.id)}>-</button>
                    <p>{item.quantity}</p>
                    <button className='cart-item-btn' onClick={() => onIncrease(item.id)}>+</button>
                    <button className='remove-cart-item' onClick={() => onRemove(item.id)}>Ta bort</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
