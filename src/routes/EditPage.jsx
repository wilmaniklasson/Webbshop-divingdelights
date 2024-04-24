import React from 'react';
import "./routesStyle/EditPage.css";
import { Link } from 'react-router-dom';
import Products from '../components/Products.jsx';






const EditPage = () => {
    return (
        <div className='edit-page'>
             <Link to="/">
                <button className="submit">Logga ut</button>
            </Link>


            <Products />
            

          


            
        </div>
    );
}
export default EditPage;