import { useStore } from '../data/store.js'
import ViewProduct from './ViewProduct.jsx'
import "./Style/Products.css"

const Products = () => {
    const products = useStore(state => state.products);
    
    
    return (
        <div>
            {products.map(product => (
                <ViewProduct key={product.key} product={product} />
            ))}
        </div>
    );
}

export default Products;

