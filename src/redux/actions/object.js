//ADD_OBJECT
import uuid from 'uuid';
export const addObject = ({
    title='',
    details='',
    amount=0,
    createdAt=0
}={}) => ({
    type:'ADD_OBJECT', 
    object:{
        id:uuid(),
        title,
        details,
        amount,
        createdAt}
});
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