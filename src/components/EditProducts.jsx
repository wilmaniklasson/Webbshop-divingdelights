import React, { useState } from 'react'
import {  editProduct, getProducts } from '../data/crud.js'
import { useStore } from '../data/store.js'


const EditProducts = ({ whenEditDone, product }) => {

    const [isLoading, setIsLoading] = useState(false)
    const setProducts = useStore(state => state.setProducts)
    
    // Initiera state för input fälten med aktuell produktinformation
    const [name, setName] = useState(product.name)
    const [category, setCategory] = useState(product.category)
    const [color, setColor] = useState(product.color)
    const [price, setPrice] = useState(product.price)
    const [image, setImage] = useState(product.image)
    const [description, setDescription] = useState(product.description)

const handleSave = async () => {
    setIsLoading(true);
    const updatedProduct = { // Skapa ett objekt med den nya datan
    	name,
        category,
        color,
        price,
        image,
    	description
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
                    value={name}
                    onChange={e => setName(e.target.value)}
					/>

                <label> Kategori </label>   
                <select
                    value={category}
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
                    value={color}
                    onChange={e => setColor(e.target.value)}
					/>

                <label> Pris </label>
                <input type="number"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
					/>

                <label> Bild länk </label>
                <input type="text"
                    value={image}
                    onChange={e => setImage(e.target.value)}
					/>

                
                <label> Beskrivning </label>
                <textarea
                    value={description}
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
