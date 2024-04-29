import React from 'react';
import "./Style/EditPage.css";
import { Link } from 'react-router-dom';
import AddProducts from '../components/AddProducts.jsx';
import Products from '../components/Products.jsx';
import logga from '../assets/logga.svg';

// EditPage
const EditPage = () => {
    return (
        <>
            <header className='edit-page-header'>
                <div className='edit-page-header-div'>
                    <img className="logga" src={logga} alt="logga" />
                    <h1>Produktadministration</h1>
                    <Link to="/">
                        <button className="log-out">Logga ut</button>
                    </Link>
                </div>
            </header>
      
            <div className='edit-page'>
                <AddProducts />
                <Products />
            </div>
        </>
    );
}

export default EditPage;