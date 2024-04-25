import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useStore } from '../data/store';
import { getProducts } from '../data/crud'; 
import "../index.css";

const Root = () => {
    const setProducts = useStore(state => state.setProducts);

    useEffect(() => {
        const loadProducts = async () => {
            const products = await getProducts(); // Hämta produkter från Firestore
            setProducts(products); // Spara i Zustand store
        };

        loadProducts(); // Anropa när komponenten laddas
    }, [setProducts]); // Dependency array för att säkerställa korrekt hantering av uppdateringar

    return (
        <div className="app">
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Root;
