import { useState } from 'react'
import { useStore } from '../data/store.js'
import { addProduct, getProducts } from '../data/crud.js'
import { set } from 'firebase/database'

const AddProducts = () => {
	const [isLoading, setIsLoading] = useState(false)

	// State för input fällt
	const [name, setName] = useState('')
	const [category, setCategory] = useState('')
	const [color, setColor] = useState('')
	const [price, setPrice] = useState('')
	const [image, setImage] = useState('')
	const [description, setDescription] = useState('')

	const setProducts = useStore(state => state.setProducts)

	const handleSubmit = async (event) => {
        setIsLoading(true)
		event.preventDefault()
		const newProduct = { name: name, category: category, color: color, price: price, image: image, description: description }
		
		try {
			await addProduct(newProduct)
			setName('')
			setCategory('')
			setColor('')
			setPrice('')
			setImage('')
			setDescription('')
			setProducts(await getProducts())
		} catch {
			

		} finally {
			setIsLoading(false)
		}
	}

	return (
		<section>
			<form className="form">
			<section className="column">
				<label> Namn </label>
				<input type="text"
					value={name}
					onChange={e => setName(e.target.value)}
					placeholder="Ange produktens namn"/>
				<label> Kategori </label>	
				<select
					value={category}
					onChange={e => setCategory(e.target.value)}
					>
					<option value="">Välj en kategori</option>
					<option value="Cyklop">Cyklop</option>
					<option value="Snorkel">Snorkel</option>
					<option value="Dykfenor">Dykfenor</option>
					<option value="Snorkelset">Snorkelset</option>
				</select>

				<label> Färg </label>
				<input type="text"
					value={color}
					onChange={e => setColor(e.target.value)}
					placeholder="Ange färg"/>

				<label> Pris </label>
				<input type="number"
					value={price}
					onChange={e => setPrice(e.target.value)}
					placeholder="Ange pris i SEK"/>

				<label> Bild länk </label>
				<input type="text"
					value={image}
					onChange={e => setImage(e.target.value)}
					placeholder="http://exempel.se/bild.jpg"/>

				
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
				className='handle-submit-btn'> Registrera</button>
			</form>
		</section>
	)
}

export default AddProducts
