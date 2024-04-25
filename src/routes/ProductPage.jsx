
import "./routesStyle/ProductPage.css";
import {useStore} from '../data/store';

const ProductPage = () => {
    const products = useStore(state => state.products);
    
    return (

        <div className="product-page">
            
                {products.map(product => (
                    <div key={product.key}>
                        <img className="product-image" src={product.image} alt="Product Image" />
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
       
    );
}
export default ProductPage;


