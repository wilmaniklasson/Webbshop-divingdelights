//TO DO: Validera formuläret och kontrollera om knappen ska vara inaktiverad

import { useState } from 'react';
import { useStore } from '../data/store.js';
import { addProduct, getProducts } from '../data/crud.js';

const AddProducts = () => {
    // State för att hantera laddningsstatus
    const [isLoading, setIsLoading] = useState(false);

    // State för att hantera formulärfält
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    // Hämta setProducts funktionen från Zustand store
    const setProducts = useStore(state => state.setProducts);

    // Hantera inskick av formuläret för att lägga till produkt
    const handleSubmit = async (event) => {
        setIsLoading(true);
        event.preventDefault();  // Förhindra att formuläret skickas på traditionellt vis
        const newProduct = { name, category, color, price, image, description };

        try {
            await addProduct(newProduct);  // Lägg till produkten i databasen
            // Rensa formulärfält
            setName('');
            setCategory('');
            setColor('');
            setPrice('');
            setImage('');
            setDescription('');
            setProducts(await getProducts());  // Uppdatera produktlistan i Zustand store
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section>
            <form className="form">
                <section className="column">

				 	{ /* input Namn */ }
                    <label> Namn </label>
                    <input type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Ange produktens namn"/>

					{ /* input Kategori */ }
                    <label> Kategori </label>
                    <select
                        value={category}
                        onChange={e => setCategory(e.target.value)}>
                        <option value="">Välj en kategori</option>
                        <option value="Cyklop">Cyklop</option>
                        <option value="Snorkel">Snorkel</option>
                        <option value="Dykfenor">Dykfenor</option>
                        <option value="Snorkelset">Snorkelset</option>
                    </select>

					{ /* input Färg */ }
                    <label> Färg </label>
                    <input type="text"
                        value={color}
                        onChange={e => setColor(e.target.value)}
                        placeholder="Ange färg"/>

					{ /* input Pris */ }
                    <label> Pris </label>
                    <input type="number"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        placeholder="Ange pris i SEK"/>

					{ /* input Bild länk */ }
                    <label> Bild länk </label>
                    <input type="text"
                        value={image}
                        onChange={e => setImage(e.target.value)}
                        placeholder="http://exempel.se/bild.jpg"/>

					{ /* input Beskrivning */ }
                    <label> Beskrivning </label>
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Beskriv produkten här" 
                        rows="4" cols="50">
                    </textarea>
                </section>

                <button 
                    disabled={isLoading}
                    onClick={handleSubmit} type="submit" 
                    className='handle-submit-btn'>Registrera</button>
            </form>
        </section>
    );
}

export default AddProducts;
