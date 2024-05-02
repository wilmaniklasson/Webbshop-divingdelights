import { deleteProduct, getProducts } from '../data/crud.js'
import { useStore } from '../data/store.js'
import { useState } from 'react'
import "./Style/Products.css"
import EditProducts from './EditProducts.jsx'

// Skicka in product som props
const ViewProduct = ({ product }) => {
    // State för att hantera laddningsstatus
    const [isLoading, setIsLoading] = useState(false);
    // State för att hantera redigering av produkt
    const [isEditing, setIsEditing] = useState(false)
    // Hämta setProducts funktionen från Zustand store
    const setProducts = useStore(state => state.setProducts);

    // Hantera radering av produkt
    const handleDelete = async () => {
        setIsLoading(true);
        await deleteProduct(product.key);
        const productsFromDb = await getProducts();
        setProducts(productsFromDb);
        setIsLoading(false);
    };



    return (
        <section className="view-product-section">
            {/* Om isEditing är true vissa EditProducts komponenten */}
            {isEditing ? (
				<EditProducts  product={product} whenEditDone={() => setIsEditing(false)} />
			) : (
				<>
                <div className="view-product-container"> 
                    <img className="view-product-image" src={product.image} alt="Product Image" />
                    <div>{product.name}</div>
                    <div>kategori: {product.category}</div>
                    <div>Färg: {product.color}</div>
                    <div>{product.price} kr</div>
                    <div>beskriving: {product.description}</div>
                    <div className='btn-wrapper'>
                        <button className='edit-btn' onClick={()  => setIsEditing(true)}>Ändra</button>
                        <button disabled={isLoading} onClick={handleDelete} className="delete-btn"> Radera </button>
                    </div>
                </div>
                </>
             )}
        </section>
       
    )
}

export default ViewProduct;
