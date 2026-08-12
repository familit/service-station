import {
    collection,
    addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc,
    query, where, orderBy, serverTimestamp
} from 'firebase/firestore'

import { db } from '../config/firebase'

export const api = {
    async getAll(collectionName) {
        const querySnapshot = await getDocs(collection(db, collectionName))
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
    },

    async getById(collectionName, id) {
        const docRef = doc(db, collectionName, id)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() }
        }
        return null
    },

    async add(collectionName, data) {
        const docRef = await addDoc(collection(db, collectionName), {
            ...data,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        })
        return { id: docRef.id, ...data }
    },

    async update(collectionName, id, data) {
        const docRef = doc(db, collectionName, id)
        await updateDoc(docRef, {
            ...data,
            updatedAt: serverTimestamp()
        })
        return { id, ...data }
    },

    async delete(collectionName, id) {
        const docRef = doc(db, collectionName, id)
        await deleteDoc(docRef)
        return id
    },

    async search(collectionName, field, value, operator = '==') {
        const q = query(collection(db, collectionName), where(field, operator, value))
        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
    },

    async query(collectionName, filters = [], orderByField = null) {
        let q = collection(db, collectionName)

        filters.forEach(filter => {
            q = query(q, where(filter.field, filter.operator || '==', filter.value))
        })

        if (orderByField) {
            q = query(q, orderBy(orderByField.field, orderByField.direction || 'asc'))
        }

        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
    }
}
