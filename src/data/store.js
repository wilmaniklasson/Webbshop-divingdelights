import { create } from 'zustand'

const useStore = create(set => ({
	products: [ ],

	setProducts: newProducts => set(state => ({
        products: newProducts
    })),

	addproduct: product => set(state => ({
		products: [ ...state.products, product
 ]
	})),
    deliteproduct: product => set(state => ({
        products: state.products.filter(e => e.key !== product
    .key)
    }))
}))

export { useStore }
