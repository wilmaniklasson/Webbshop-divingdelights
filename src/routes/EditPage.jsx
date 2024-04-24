import React from 'react';
import "./routesStyle/EditPage.css";
import { Link } from 'react-router-dom';
import AddProducts from '../components/AddProducts.jsx';
import Products from '../components/Products.jsx';


const EditPage = () => {
    return (
        <div className='edit-page'>
             <Link to="/">
                <button className="log-out">Logga ut</button>
            </Link>

            <AddProducts />

            <Products />
        </div>
    );
}

export default EditPage;