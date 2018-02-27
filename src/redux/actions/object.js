//ADD_OBJECT
// import uuid from 'uuid';
// export const addObject = ({
//     title='',
//     details='',
//     amount=0,
//     createdAt=0
// }={}) => ({
//     type:'ADD_OBJECT', 
//     object:{
//         id:uuid(),
//         title,
//         details,
//         amount,
//         createdAt}
// });
import db from '../../firebase/firebase';
export const addObject = (object) => ({
    type:'ADD_OBJECT', 
    object});

export const startAddObject = (objectData={}) => {
    const { title='',
            details='',
            amount=0,
            createdAt=0} = objectData;
    const object = { title, details, amount, createdAt};
    return (dispatch) => {
        //promise chainnig to be in test
       return db.ref('objects').push(object).then((ref) => {
             dispatch(addObject({id: ref.key,
            ...object}));   
        }).catch((er) => {
            console.log(er);
        });
    }
}
//EDIT_OBJECT
export const editObject = ({id}, updateTo)=>({
    type:'EDIT_OBJECT',
    id,
    updateTo
});
//DELETE_OBJECT
export const deleteObject = (({id}) => ({
    type: 'DELETE_OBJECT',
    id
}));