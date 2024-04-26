import React from 'react';
import './routesStyle/ShoppingCart.css';  // Importera CSS-filen
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
    
  

    return (
        <div className="shopping-cart">
            <div className='cart-header'>
            <Link to="/">
                <button>X</button>
            </Link>
            </div>
            
            <h1>Varukorg</h1>
            <section className='cart-items'>
                <div className='cart-item'>
                    <img className="product-image" src='https://via.placeholder.com/150' alt='Produktbild' />
                    <div className='cart-item-info'>
                        <h2>Produktnamn</h2>
                        <p>100kr</p>
                        <div className='cart-item-quantity'>
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='checkout-section'>
                <p>Totalt pris: 1000kr</p>
                <p>Varav moms:  kr</p>
                <button className='checkout-btn'>Gå till kassan</button>
            </section>
        </div>
    );
}

export default ShoppingCart;
