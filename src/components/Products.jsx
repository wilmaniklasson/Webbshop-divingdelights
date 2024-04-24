import { deleteProduct, getProducts } from '../data/crud.js'
import { useStore } from '../data/store.js'
import { useState } from 'react'
import ViewProduct from './ViewProduct.jsx'
import "./ViewProduct.css"

const Products = () => {
    const { products, setProducts } = useStore(state => ({
        products: state.products,
        setProducts: state.setProducts
    }));

    const handleGetProduct = async () => {
        setProducts(await getProducts());
    };

    return (
        <div>
            <div className='get-product-constiner'>
                <button onClick={handleGetProduct} className='get-product-btn'>
                    Hämta produkter
                </button>
            </div>
            {products.map(product => (
                <ViewProduct key={product.key} product={product} />
            ))}
        </div>
    );
}

export default Products;

