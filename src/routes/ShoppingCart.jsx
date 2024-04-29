// ShoppingCart.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../data/store';
import CartItem from '../components/CartItem';
import './Style/ShoppingCart.css';

const ShoppingCart = () => {
    const orderedItems = useStore(state => state.orderedItems);
    const deleteOrderedItem = useStore(state => state.deleteOrderedItem);

    let total = 0;
    orderedItems.forEach(item => {
        total += Number(item.price);
    });

    return (
        <div className="shopping-cart">
            <div className='cart-header'>
                <Link to="/">
                    <button>X</button> 
                </Link>
            </div>
            
            <h1>Varukorg</h1>
            <section className='shopping-cart-items'>
                {orderedItems.map((item, index) => (
                    <CartItem key={index} item={item} onRemove={deleteOrderedItem} />
                ))}
            </section>

            <section className='checkout-section'>
                Total pris: {total} kr  
                <button className='checkout-btn'>Gå till kassan</button>
            </section>
        </div>
    );
}

export default ShoppingCart;
