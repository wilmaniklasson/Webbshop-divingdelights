import React, { useState } from 'react'
import {  editProduct, getProducts } from '../data/crud.js'
import { useStore } from '../data/store.js'
import "./Style/Products.css"
import { validateField } from '../data/validation.js';


const EditProducts = ({ whenEditDone, product }) => {
    // State för att hantera felmeddelanden
    const [errors, setErrors] = useState({}); 
    const [isLoading, setIsLoading] = useState(false)
    const setProducts = useStore(state => state.setProducts)
    
    // State för input fälten och des aktuell information
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

// Validera formulärfält
const handleBlur = (field) => (e) => {
    const { value } = e.target;
    const error = validateField(field, value);
    setErrors(prevErrors => ({ ...prevErrors, [field]: error }));
  };
  
  

  const isFormValid = () => {
    return (
      name.trim() && 
      category && 
      color.trim() && 
      price > 0 && 
      image.trim() && 
      description.trim() && 
      Object.values(errors).every(err => !err)
    );
  };
  

    return (
        <>
        <section>
            <form className="form">
            <section className="column">

                { /* input Namn*/ }
                <label> Namn </label>
                <input type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onBlur={handleBlur('name')} />
                {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    
                { /* input Kategori*/ }
                <label> Kategori </label>   
                <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    onBlur={handleBlur('category')}>
                    <option value="">Ändra en kategori</option>
                    <option value="Cyklop">Cyklop</option>
                    <option value="Snorkel">Snorkel</option>
                    <option value="Dykfenor">Dykfenor</option>
                    <option value="Snorkelset">Snorkelset</option>
                </select>
                {errors.category && <div style={{ color: 'red' }}>{errors.category}</div>}

                { /* input Färg */ }
                <label> Färg </label>
                <input type="text"
                    value={color}
                    onChange={e => setColor(e.target.value)}
                    onBlur={handleBlur('color')}/>
                {errors.color && <div style={{ color: 'red' }}>{errors.color}</div>}

                { /* input Pris */ }
                <label> Pris </label>
                <input type="number"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    onBlur={handleBlur('price')}/>
                {errors.price && <div style={{ color: 'red' }}>{errors.price}</div>}

                { /* input Bild länk */ }
                <label> Bild länk </label>
                <input type="text"
                    value={image}
                    onChange={e => setImage(e.target.value)} 
                    onBlur={handleBlur('image')}/>
                {errors.image && <div style={{ color: 'red' }}>{errors.image}</div>}

                { /* input Beskriving */ }
                <label> Beskrivning </label>
                <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    onBlur={handleBlur('description')}
					placeholder={product.Description}
                    rows="4" cols="50">
                 </textarea>
                 {errors.description && <div style={{ color: 'red' }}>{errors.description}</div>}

            </section>

            <button  disabled={!isFormValid() || isLoading}
            onClick={handleSave} className="save-btn">Spara</button>
            </form>
        </section>
        
        </>
    )
}

export default EditProducts
