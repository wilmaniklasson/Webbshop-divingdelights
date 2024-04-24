import { useState } from 'react'
import { useStore } from '../data/store.js'
import { addProduct, getProducts } from '../data/crud.js'

const AddProducts = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [Name, setName] = useState('')

	const setProducts = useStore(state => state.setProducts)

	const handleSubmit = async (event) => {
        setIsLoading(true)
		event.preventDefault()
		const newProduct = { Name: Name}
		
		try {
			await addProduct(newProduct)
			setName('')
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
					value={Name}
					onChange={e => setName(e.target.value)}
					/>
			</section>

			
			<button
				disabled={isLoading}
				onClick={handleSubmit} type="submit" 
				className='submit-btn'> Registrera</button>
			</form>
		</section>
	)
}

export default AddProducts
