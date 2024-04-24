import React from 'react';
import "./routesStyle/EditPage.css";
import { Link } from 'react-router-dom';






const EditPage = () => {
    return (
        <div>
             <Link to="/">
                <button className="submit">Logga ut</button>
            </Link>

            <h1>lägg till</h1>
            <h1>Redigera</h1>
            

          


            
        </div>
    );
}
export default EditPage;