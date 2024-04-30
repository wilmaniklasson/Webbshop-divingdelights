// ! TODO ! 
// Lägg till:
// Sortering kategori.
// Funktionalitet finns produken i varukorgen? öka antalet istället för att lägga till en ny produkt
// och funktionalitet + / - för att öka och minska antal i varukorgen med hjälp av knappar.


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

    // Funktion för att lägga till en produkt i varukorgen
    addOrderedItem: item => set(state => ({
        orderedItems: [
            ...state.orderedItems,
            {
                ...item,
                // Genererar ett unikt ID baserat på nuvarande tidsstämpel
                id: Date.now(),
            },
        ],
    })),

    // Funktion för att ta bort en produkt från varukorgen med ett specifikt ID
    deleteOrderedItem: id => set(state => ({
        orderedItems: state.orderedItems.filter(item => item.id !== id),
    })),

    // Funktion för att rensa varukorgen
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
