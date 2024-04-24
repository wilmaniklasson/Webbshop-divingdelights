import { deleteProduct } from '../data/crud.js'
import { useStore } from '../data/store.js'
import { useState } from 'react'
import "./ViewProduct.css"

const ViewProduct = ({ product }) => {
    const [isLoading, setIsLoading] = useState(false);
    const setProducts = useStore(state => state.setProducts);

    const handleDelete = async () => {
        setIsLoading(true);
        await deleteProduct(product.key);
        const productsFromDb = await getProducts();
        setProducts(productsFromDb);
        setIsLoading(false);
    };

    return (
        <section className="view-product-section">
            <div className="view-product-container"> 
                <img className="product-image" src={product.Image} alt="Product Image" />
                <div>{product.Name}</div>
                <div>kategori: {product.Category}</div>
                <div>Färg: {product.Color}</div>
                <div>{product.Price} kr</div>
                <div>beskriving: {product.Description}</div>
            </div>
            <button disabled className='edit-btn' onClick={() => console.log("lägg till edit funktion")}>Edit</button>
            <button disabled={isLoading} onClick={handleDelete} className="delete-btn"> Delete </button>
        </section>
    );
}

export default ViewProduct;
