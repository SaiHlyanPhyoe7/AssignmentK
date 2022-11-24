// update documents
const updateDocument = async (id, updates) => {
    const updateDocument = await ref.doc(id).update(updates)

}