


import { create } from 'zustand';

const useStore = create(set => ({

    
    // Webbshopens produkter
    products: [],

    setProducts: newProducts => set({
        products: newProducts
    }),

    // Funktion för att lägga till en produkt
    addProduct: product => set(state => ({
        products: [...state.products, product]
    })),

    // Funktion för att ta bort en produkt baserat på dess 'key'
    deleteProduct: productKey => set(state => ({
        products: state.products.filter(product => product.key !== productKey)
    })),



    //Kundens varukorg
    orderedItems: [],

            // Lägg till en produkt i varukorgen eller öka kvantiteten
        addOrderedItem: item => set(state => {
            const existingItemIndex = state.orderedItems.findIndex(i => i.name === item.name);
            if (existingItemIndex !== -1) {
                // Produkt finns redan, öka kvantiteten
                const newItems = state.orderedItems.slice(); // Kopierar befintlig array
                newItems[existingItemIndex] = {
                    ...newItems[existingItemIndex],
                    quantity: (newItems[existingItemIndex].quantity || 1) + 1 // Öka kvantiteten
                };
                return { orderedItems: newItems };
            } else {
                // Produkt finns inte, lägg till med kvantitet 1
                return {
                    orderedItems: [
                        ...state.orderedItems,
                        {
                            ...item,
                            quantity: 1,
                            id: Date.now(),
                        }
                    ],
                };
            }
        }),

        // Öka kvantiteten av en produkt i varukorgen
        onIncrease: id => set(state => {
            const newItems = state.orderedItems.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            return { orderedItems: newItems };
        }),

        // Minska kvantiteten av en produkt i varukorgen
        onDecrease: id => set(state => {
            const newItems = state.orderedItems.map(item => {
                if (item.id === id) {
                    // Säkerställ att kvantiteten inte går under 1
                    const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
            return { orderedItems: newItems };
        }),




    // Ta bort en produkt från varukorgen med ett specifikt ID
    deleteOrderedItem: id => set(state => ({
        orderedItems: state.orderedItems.filter(item => item.id !== id),
    })),

    // Rensa varukorgen
    clearItems: () => set({ orderedItems: [] }),


   // Sortering av produkter
    sortProducts: (sortType) => set(state => {
        let sortedProducts = [...state.products];
        switch (sortType) {
            case "name-ascending":
                sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "price-rising":
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case "price-falling":
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            
            default:
                break;
                
        }
        return { products: sortedProducts };
    }),

   

}));


export { useStore };
