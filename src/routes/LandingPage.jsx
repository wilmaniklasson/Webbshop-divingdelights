import React from 'react';
import "./Style/LandingPage.css";
import { Link } from 'react-router-dom';
import snorkelingImage from '../assets/snorkelingImage.webp';
import logga from '../assets/logga.svg';
import shoppingCart from '../assets/shoppingCart.svg';
import {useStore} from '../data/store';
import ProductCard from '../components/ProductCard.jsx';



const LandingPage = () => {
    const sortProducts = useStore(state => state.sortProducts);
    
    const handleSortChange = (event) => {
        sortProducts(event.target.value);
    };

    const setCategory = useStore(store => store.selectCategory);

    const handleCategoryClick = (category) => {
        setCategory(category); // Anropa selectCategory med den valda kategorin
    };
    return (
        <div className="landing-page">
            <header className='landing-page-header'>
                <div className='landing-page-header-div'>
                <img className="logga" src={logga} alt="logga" />
                <Link to="/Varukorg">
                <img className="shoppingCart" src={shoppingCart} alt="shoppingCart" />
                </Link>
                </div>
               
            </header>
            <section className='banner'>
            <img src={snorkelingImage} alt="Snorkeling Scene" />
            </section>
            <p className='category-text'>Kategorier</p>
            <section className='categories-section'>
            <button className='category-btn' onClick={() => handleCategoryClick('Cyklop')}>Cyklop</button>
            <button className='category-btn' onClick={() => handleCategoryClick('Snorkel')}>Snorkel</button>
            <button className='category-btn' onClick={() => handleCategoryClick('Dykfenor')}>Dykfenor</button>
            <button className='category-btn' onClick={() => handleCategoryClick('Snorkelset')}>Snorkelset</button>
        </section>
            <section className='sort-btns'>
                
            <section className='sort-btns'>
                <select onChange={handleSortChange}>
                    <option value="default">Sortera</option>
                    <option value="name-ascending">A-Ö</option>
                    <option value="price-rising">Pris stigande</option>
                    <option value="price-falling">Pris fallande</option>
                </select>
            </section>
            </section>
            <section className='product-section'>
                <ProductCard />
            </section>

           
            <footer className='footer-landing-page'>
                <p className='admin'>Administratör:</p>
                <Link to="/LoggaIn">
                <button className="sign-in-btn">Logga in</button>
                </Link>
            </footer>
            
        </div>
    );
}

export default LandingPage;