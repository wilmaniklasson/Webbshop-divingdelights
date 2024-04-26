import React, { useState } from 'react';
import { useStore } from '../data/store';
import './ProductCard.css';

// Tar emot produkter
const ProductCardsContainer = () => {
    const products = useStore(state => state.products);
    

    return (
        <>
        {products.map(product => (
                <ProductCard key={product.key} product={product} />
            ))}
        </>
            
        
    );
}

// Tar emot produkt som prop
const ProductCard = ({ product }) => {

    const [ orderedItems,addOrderedItem] = useStore(state => [state.orderedItems, state.addOrderedItem]);
    

    function addToCart() {
        addOrderedItem(product);
        
    }

    // State för beskrivningen
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className='product-card'>
            <div key={product.key} className="product-items">
                    <div className='product-item-image'>
                        <img className="product-image" src={product.image} alt={product.name} />
                    </div>
                    <div className='product-item'>
                            <h1>{product.name}</h1>
                            <p>{product.price} kr</p>
                            <div className='btn-wrapper'>
                                
                                <button className='show-more-btn' onClick={() => setIsVisible(!isVisible)}>
                                    {isVisible ? 'Läs mindre' : 'Läs mer'}
                                </button>
                                <button className='buy-btn' onClick={addToCart}>Köp</button>
                            </div>  
                    </div>
                
            </div>
             {/* Conditional rendering för att visa/dölja */}
             {isVisible && <div className='product-description'><p>{product.description}</p> </div>}
        </div>
    );
}



export default ProductCardsContainer;
