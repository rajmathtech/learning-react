// const object = [{
//     id:'something',
//     title:'',
//     details:'',
//     amount:'',
//     createdAt:0
// }];
const object = [];
export default (state=object, action) => {
 switch(action.type) {
    case 'ADD_OBJECT':
        return [...state, action.object];
    case 'EDIT_OBJECT': 
        return state.map((object)=>
        {
            
            if (action.id === object.id) {             
                return {...object, ...action.updateTo};
            }
            return object;
        });   
    case 'DELETE_OBJECT':
        return state.filter((object)=> action.id !== object.id);     
    default: 
        return state;
 }
}
