import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore/lite';
import { db } from './fire.js';

const collectionName = 'products';
const collectionRef = collection(db, collectionName);

async function getProducts() {
    try {
        // Hämta alla dokument i samlingen
        const productSnapshot = await getDocs(collectionRef);
        const productList = productSnapshot.docs.map(doc => withKey(doc));
        return productList;
    } catch (error) {
        console.error('Failed to fetch products:', error);
		return []; // returnerar en tom array om fetch misslyckas
        
    }
}

function withKey(doc) {
    let o = doc.data();
    o.key = doc.id; // "id" is the document reference
    return o;
}

async function addProduct(product) {
    try {
        await addDoc(collectionRef, product);
    } catch (error) {
        console.error('Failed to add product:', error);
    }
}

async function deleteProduct(key) {
    try {
        const docRef = doc(collectionRef, key);
        await deleteDoc(docRef);
    } catch (error) {
        console.error('Failed to delete product:', error);
    }
}

async function editProduct(key, updatedProduct) {
    try {
        const docRef = doc(collectionRef, key);
        await updateDoc(docRef, updatedProduct);
    } catch (error) {
        console.error('Failed to edit product:', error);
    }
}

export { getProducts, addProduct, deleteProduct, editProduct };
