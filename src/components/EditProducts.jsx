
import React, { useState } from 'react'
import {  editProduct, getProducts } from '../data/crud.js'
import { useStore } from '../data/store.js'


const EditProducts = ({ whenEditDone, product }) => {

	const [isLoading, setIsLoading] = useState(false)
	const setProducts = useStore(state => state.setProducts)
	
	const [name, setName] = useState(product.name);
	

const handleSave = async () => {
    setIsLoading(true);
    const updatedProduct = { name }; // Skapa ett objekt med den nya datan
    await editProduct(product.key, updatedProduct);
    const updatedList = await getProducts();
    setProducts(updatedList);
    whenEditDone(); // Återgå till visningsläge
    
}

	return (
		<>
		<div className="constiner-change-Info">
		<section className="change-Info">
			<section className="name-change">
				<label>Name: </label>
				<input type="text" value={name} onChange={e => setName(e.target.value)} />
			</section>
		</section>
		<button disabled={isLoading} onClick={handleSave} className="save-btn">Save</button>

		</div>
		
		</>
	)
}

export default EditProducts