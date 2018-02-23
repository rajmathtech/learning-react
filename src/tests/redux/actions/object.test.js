import {addObject, editObject, deleteObject} from '../../../redux/actions/object';
import objects from '../../fixtures/objects';
//default values        
test('should set default object', () => {
    const defObject = addObject();
    expect(defObject).toEqual({
        type:'ADD_OBJECT',
        object:{
            id: expect.any(String),
            title:'',
            details:'',
            amount:0,
            createdAt:0
        }
    });
});
//with new object
test('should set new object', () => {
    const object = addObject(objects[1]);
    expect(object).toEqual(
    {
        type:'ADD_OBJECT',
         object: {
            ...objects[1], id: expect.any(String)
        }
    });
});

//edit object
test('should edit object title', () => {
    const obj = objects[0];
    const updateTo = {...obj, title:'edited object one'};
    const editedObj = editObject(obj, updateTo);
    expect(editedObj).toEqual({
        type:'EDIT_OBJECT',
        updateTo, id: expect.any(String)
        });
});
//remove object
test('should remove the object two', () => {
    const remObj = deleteObject(objects[1]);
    expect(remObj).toEqual({type:'DELETE_OBJECT', 
    ...remObj, id:expect.any(String)});
});