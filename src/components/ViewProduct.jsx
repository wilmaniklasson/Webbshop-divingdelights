import { deleteProduct, getProducts } from '../data/crud.js'
import { useStore } from '../data/store.js'
import { useState } from 'react'
import "./componentsStyle/Products.css"
import EditProducts from './EditProducts.jsx'

const ViewProduct = ({ product }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false)
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
            {isEditing ? (
				<EditProducts  product={product} whenEditDone={() => setIsEditing(false)} />
			) : (
				<>
                <div className="view-product-container"> 
                <img className="product-image" src={product.Image} alt="Product Image" />
                <div>{product.Name}</div>
                <div>kategori: {product.Category}</div>
                <div>Färg: {product.Color}</div>
                <div>{product.Price} kr</div>
                <div>beskriving: {product.Description}</div>
            </div>
            <button className='edit-btn' onClick={()  => setIsEditing(true)}>Edit</button>
            <button disabled={isLoading} onClick={handleDelete} className="delete-btn"> Delete </button>
                </>
             )}
        </section>
       
    )
}

export default ViewProduct;
