import db from '../../firebase/firebase';
//ADD_OBJECT
export const addObject = (object) => ({
    type:'ADD_OBJECT', 
    object});

export const startAddObject = (objectData={}) => {
    const { title='',
            details='',
            amount=0,
            createdAt=0} = objectData;
    const object = { title, details, amount, createdAt};
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        //promise chainnig to be in test
       return db.ref(`users/${uid}/objects`).push(object).then((ref) => {
             dispatch(addObject({id: ref.key,
            ...object}));   
        }).catch((er) => {
            console.log(er);
        });
    }
}
//GET_OBJECTS
export const getObjects = (objects) => ({
    type: 'GET_OBJECTS',
    objects
}); 
export const startGetObjects = () =>{
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const objectsData = [];
        return db.ref(`users/${uid}/objects`).once('value').then((snapshot) => {
                snapshot.forEach( (childSnapshot) => {
                    objectsData.push({id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                dispatch(getObjects(objectsData));
        });
    }
};
//EDIT_OBJECT
export const editObject = (id, updateTo)=>({
    type:'EDIT_OBJECT',
    id,
    updateTo
});
export const startEditObject = (id, updateTo) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return db.ref(`users/${uid}/objects/${id}`).update(updateTo).then(() => {
            dispatch(editObject(id, updateTo));
        });
    }
}
//DELETE_OBJECT
export const deleteObject = ((id) => ({
    type: 'DELETE_OBJECT',
    id
}));
export const startDeleteObject = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return db.ref(`users/${uid}/objects/${id}`).set(null).then(() => {
            dispatch(deleteObject(id));
        });
    }
}