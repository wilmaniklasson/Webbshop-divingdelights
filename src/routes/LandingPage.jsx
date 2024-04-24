import React from 'react';
import "./routesStyle/LandingPage.css";
import { Link } from 'react-router-dom';
import snorkelingImage from '../assets/snorkelingImage.webp';
import Cyklop from '../assets/Cyklop.webp';
import Snorkel from '../assets/Snorkel.webp';
import Dykfenor from '../assets/Dykfenor.webp';
import Snorkelset from '../assets/Snorkelset.webp';
import logga from '../assets/logga.svg';
import shoppingCart from '../assets/shoppingCart.svg';


const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className='landing-page-header'>
                <div className='landing-page-header-div'>
                <img className="logga" src={logga} alt="logga" />
                <img className="shoppingCart" src={shoppingCart} alt="shoppingCart" />
                </div>
               
            </header>
            <section className='banner'>
            <img src={snorkelingImage} alt="Snorkeling Scene" />
            </section>
            <section className='categories-section'>
                <div className='categories'>
                <img src={Cyklop} alt="" />
                <p>Cyklop</p>
                </div>
                <div className='categories'>
                <img src={Snorkel} alt="" />
                <p>Snorkel</p>
                </div>
                <div className='categories'>
                <img src={Dykfenor} alt="" />
                <p>Dykfenor</p>
                </div>
                <div className='categories'>
                <img src={Snorkelset} alt="" />
                <p> Snorkelset</p>
                </div>
            </section>
            <section className='product-section'>
                <div className='product-div'>produkt</div>
                <div className='product-div'>produkt</div>
                <div className='product-div'>
                    <div>bild</div>
                    <h1>Produkt</h1>
                    <p>Produktbeskrivning</p>
                    <button className="add">Lägg i varukorg</button>
                    <Link to="/valprodukt">
                    <button className="Read-more">Läs mer</button>
                    </Link>
                </div>
            </section>
            <footer>
                <p>© 2021 Diving Delights</p>
                <Link to="/LoggaIn">
                <button className="submit">Logga in</button>
                </Link>
            </footer>
            
        </div>
    );
}

export default LandingPage;