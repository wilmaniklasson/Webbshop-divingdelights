import React, { useState } from 'react'
import {  editProduct, getProducts } from '../data/crud.js'
import { useStore } from '../data/store.js'


const EditProducts = ({ whenEditDone, product }) => {

    const [isLoading, setIsLoading] = useState(false)
    const setProducts = useStore(state => state.setProducts)
    
    // Initiera state för input fälten med aktuell produktinformation
    const [Name, setName] = useState(product.name || '')
    const [Category, setCategory] = useState(product.category || '')
    const [Color, setColor] = useState(product.color || '')
    const [Price, setPrice] = useState(product.price || '')
    const [Image, setImage] = useState(product.image || '')
    const [Description, setDescription] = useState(product.description || '')

const handleSave = async () => {
    setIsLoading(true);
    const updatedProduct = { // Skapa ett objekt med den nya datan
        name: Name,
        category: Category,
        color: Color,
        price: Price,
        image: Image,
        description: Description
    }; 
    await editProduct(product.key, updatedProduct);
    const updatedList = await getProducts();
    setProducts(updatedList);
    whenEditDone(); // Återgå till visningsläge
    
}

    return (
        <>
        <section>
            <form className="form">
            <section className="column">
                <label> Namn </label>
                <input type="text"
                    value={Name}
                    onChange={e => setName(e.target.value)}
					placeholder={product.Name}/>

                <label> Kategori </label>   
                <select
                    value={Category}
                    onChange={e => setCategory(e.target.value)}
                    >
                    <option value="">Ändra en kategori</option>
                    <option value="Cyklop">Cyklop</option>
                    <option value="Snorkel">Snorkel</option>
                    <option value="Dykfenor">Dykfenor</option>
                    <option value="Snorkelset">Snorkelset</option>
                </select>

                <label> Färg </label>
                <input type="text"
                    value={Color}
                    onChange={e => setColor(e.target.value)}
					placeholder={product.Color}/>

                <label> Pris </label>
                <input type="number"
                    value={Price}
                    onChange={e => setPrice(e.target.value)}
					placeholder={product.Price}/>

                <label> Bild länk </label>
                <input type="text"
                    value={Image}
                    onChange={e => setImage(e.target.value)}
					placeholder={product.Image}/>

                
                <label> Beskrivning </label>
                <textarea
                    value={Description}
                    onChange={e => setDescription(e.target.value)}
					placeholder={product.Description}
                    rows="4" cols="50">
                 </textarea>

            </section>

            <button disabled={isLoading} onClick={handleSave} className="save-btn">Save</button>
            </form>
        </section>
        
        </>
    )
}

export default EditProducts
