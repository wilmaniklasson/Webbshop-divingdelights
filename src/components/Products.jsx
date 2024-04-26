import { deleteProduct, getProducts } from '../data/crud.js'
import { useStore } from '../data/store.js'
import { useState } from 'react'
import ViewProduct from './ViewProduct.jsx'
import "./componentsStyle/Products.css"

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
            {products.map(product => (
                <ViewProduct key={product.key} product={product} />
            ))}
        </div>
    );
}

export default Products;

